import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  activityItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
  },

  activityPhoto: {
    width: 80,
    height: 60,
    objectFit: 'cover',
    borderRadius: 4,
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },

  activityName: {
    margin: 0,
    fontSize: 16,
    fontWeight: 600,
  },

  activityDescription: {
    margin: 0,
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.65)',
  },
});
