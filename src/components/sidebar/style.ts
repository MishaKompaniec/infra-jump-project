import { createUseStyles } from 'react-jss';
import { colors } from '../../colors';

export const useStyles = createUseStyles({
  wrapper: {
    width: '40%',
    padding: 24,
    borderRadius: 4,

    '@media (max-width: 768px)': {
      width: '100%',
    },
  },

  daysList: {
    padding: 0,
    marginBottom: 24,
    listStyle: 'none',
  },

  dayItem: {
    borderRadius: 2,
    padding: '14px 16px',
    cursor: 'pointer',
    fontWeight: 500,
    transition: 'all 0.3s',

    '&:hover': {
      backgroundColor: colors.lightGray,
      color: colors.blue,
    },
  },

  activeDay: {
    backgroundColor: colors.lightBlue,
    color: colors.blue,
    fontWeight: 600,
  },

  activities: {
    borderTop: `2px solid ${colors.lightGray}`,
    paddingTop: 16,
  },
});
