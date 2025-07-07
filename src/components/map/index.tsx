import { type FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { useStyles } from './style';
import { center, mapContainerStyle } from '../../utils';
import type { Activity, MapProps } from '../../type';
import { Loader } from '../loader';

const Map: FC<MapProps> = ({ activeDay, allDays }) => {
  const classes = useStyles();

  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);
  const apiKey = import.meta.env.VITE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_MAP_ID;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: useMemo(() => ['maps', 'marker'], []),
  });

  const getMarkerContent = (activity: Activity, isActive: boolean) => {
    const markerImg = document.createElement('img');
    markerImg.src = '/img/blue_marker.png';
    markerImg.style.width = '32px';
    markerImg.style.height = '32px';

    if (!isActive) {
      markerImg.style.filter = 'grayscale(100%) brightness(50%)';
    }

    markerImg.title = activity.name;

    return markerImg;
  };

  const clearMarkers = () => {
    markersRef.current.forEach((marker) => (marker.map = null));
    markersRef.current = [];
  };

  const addMarkers = (map: google.maps.Map) => {
    allDays.forEach((day) => {
      day.activities.forEach((activity) => {
        const position = {
          lat: activity.coords.lat,
          lng: activity.coords.lng,
        };

        const isActive = activeDay ? day.id === activeDay.id : false;

        const marker = new google.maps.marker.AdvancedMarkerElement({
          position,
          map,
          title: activity.name,
          content: getMarkerContent(activity, isActive),
        });

        markersRef.current.push(marker);
      });
    });
  };

  const updateMap = (map: google.maps.Map) => {
    clearMarkers();
    addMarkers(map);

    if (activeDay && activeDay.activities.length > 0) {
      const firstCoords = activeDay.activities[0].coords;
      map.panTo({ lat: firstCoords.lat, lng: firstCoords.lng });
    }
  };

  const onMapLoad = useCallback(
    (map: google.maps.Map) => {
      mapRef.current = map;
      updateMap(map);
    },
    [activeDay, allDays]
  );

  useEffect(() => {
    if (mapRef.current) {
      updateMap(mapRef.current);
    }
  }, [activeDay, allDays]);

  if (loadError) return <p>Error loading map</p>;
  if (!isLoaded) return <Loader />;

  return (
    <div className={classes.wrapper}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={11}
        onLoad={onMapLoad}
        options={{ mapId }}
      />
    </div>
  );
};

export { Map };
