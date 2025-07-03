export interface MapProps {
  activeDay: Day | null;
  allDays: Day[];
}

export interface DayGroupedMarker
  extends google.maps.marker.AdvancedMarkerElement {
  dayGroup: number;
}

export interface SidebarProps {
  trip: Trip;
  activeDay: Day | null;
  setActiveDay: React.Dispatch<React.SetStateAction<Day | null>>;
}

export interface ActivityItemProps {
  activity: {
    id: number;
    name: string;
    description: string;
    photo_url: string;
  };
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Activity {
  id: number;
  name: string;
  description: string;
  photo_url: string;
  coords: Coordinates;
}

export interface Day {
  id: number;
  title: string;
  activities: Activity[];
}

export interface Trip {
  trip_title: string;
  days: Day[];
}
