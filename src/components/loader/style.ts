import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  load: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 9999,
  },

  dot: {
    width: 10,
    height: 10,
    margin: '0 5px',
    borderRadius: '50%',
    backgroundColor: '#3498db',
    animationName: '$blink',
    animationDuration: '1.4s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',

    '&:nth-child(1)': {
      animationDelay: '0s',
    },

    '&:nth-child(2)': {
      animationDelay: '0.2s',
    },

    '&:nth-child(3)': {
      animationDelay: '0.4s',
    },
  },

  '@keyframes blink': {
    '0%, 80%, 100%': { opacity: 0.3 },
    '40%': { opacity: 1 },
  },
});
