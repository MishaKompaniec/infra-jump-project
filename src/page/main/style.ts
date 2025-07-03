import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',

    '@media (max-width: 768px)': {
      flexDirection: 'column',
      padding: '0 10px',
    },
  },
});
