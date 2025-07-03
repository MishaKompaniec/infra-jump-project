import { useStyles } from './style';

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.load}>
      <span className={classes.dot} />
      <span className={classes.dot} />
      <span className={classes.dot} />
    </div>
  );
};

export { Loader };
