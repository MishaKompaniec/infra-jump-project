import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  wrapper: {
    width: '60%',
    height: '100vh',

    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
});
