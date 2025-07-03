import { type FC } from 'react';
import { useStyles } from './style';
import type { SidebarProps } from '../../type';
import ActivityItem from '../activityItem';

const Sidebar: FC<SidebarProps> = ({ setActiveDay, activeDay, trip }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h2>{trip.trip_title}</h2>

      <ul className={classes.daysList}>
        {trip.days.map((day) => (
          <li
            key={day.id}
            className={`${classes.dayItem} ${
              activeDay?.id === day.id ? classes.activeDay : ''
            }`}
            onClick={() => setActiveDay(day)}
          >
            День {day.id}: {day.title}
          </li>
        ))}
      </ul>

      <div className={classes.activities}>
        {activeDay?.activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export { Sidebar };
