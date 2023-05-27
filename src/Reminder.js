import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  reminder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '20px',
    color: 'red',
    textShadow: `
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000,
      0px 2px 5px rgba(0, 0, 0, 3)
    `, // Add the text shadow with stroke
  },
  icon: {
    marginRight: '10px',
  },
}));

const Reminder = () => {
  const classes = useStyles();

  return (
    <Typography variant="subtitle1" className={classes.reminder}>
      <InfoIcon className={classes.icon} />
      "PLEASE UPLOAD ONLY PICTURES OF MANGO LEAVES"
    </Typography>
  );
};

export default Reminder;
