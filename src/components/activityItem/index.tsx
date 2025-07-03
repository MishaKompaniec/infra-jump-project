import { type FC } from 'react';
import { placeholderImg } from '../../utils';
import { useStyles } from './style';
import type { ActivityItemProps } from '../../type';

const ActivityItem: FC<ActivityItemProps> = ({ activity }) => {
  const classes = useStyles();

  return (
    <div key={activity.id} className={classes.activityItem}>
      <img
        src={activity.photo_url}
        alt={activity.name}
        className={classes.activityPhoto}
        onError={(e) => {
          e.currentTarget.src = placeholderImg;
        }}
      />
      <div>
        <h4 className={classes.activityName}>{activity.name}</h4>
        <p className={classes.activityDescription}>{activity.description}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
