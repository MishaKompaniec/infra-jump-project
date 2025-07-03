import { useEffect, useState } from 'react';
import { Sidebar, Map, Loader } from '../../components';
import { useStyles } from './style';
import type { Day, Trip } from '../../type';

const MainPage = () => {
  const classes = useStyles();

  const [trip, setTrip] = useState<Trip | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeDay, setActiveDay] = useState<Day | null>(null);

  useEffect(() => {
    async function fetchTrips() {
      try {
        const response = await fetch('/mock-trip.json');
        const data = await response.json();
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setTrip(data);
        setActiveDay(data.days[0]);
      } catch (error) {
        console.error('Error loading trips:', error);
        setTrip(null);
      } finally {
        setLoading(false);
      }
    }

    fetchTrips();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!trip) {
    return <div>Error loading trips data</div>;
  }
  return (
    <div className={classes.wrapper}>
      <Sidebar trip={trip} activeDay={activeDay} setActiveDay={setActiveDay} />
      <Map activeDay={activeDay} allDays={trip.days} />
    </div>
  );
};

export default MainPage;
