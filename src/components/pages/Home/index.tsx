import { Typography, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  image: {
    margin: theme.spacing(0, 'auto', 3),
    borderRadius: 8,
    overflow: 'hidden',
    width: 600,
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    '& img': {
      maxWidth: '100%',
    },
  },
}));

const Home: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <Typography variant="h1" align="center">Technoir</Typography>
      <div className={styles.image}>
        <img src="technoir.png" />
      </div>
      <Typography variant="h3" component="h2" align="center">
        The year is 2027. The humanity befell victim to its own greed. The divide has never been greater. 
        The rich and the high society are wallowing in their own gluttony, while the slums are disease ridden and poverty stricken. 
        It is cannibalize, or be cannibalized. Enter the world of Technoir as mercenaries - people fated to be inbetween, spend their days getting hands dirty for corporate filth to put food on their table. Or maybe... just maybe... the right man in the wrong place can make all the difference in the world. 
        <br /> Welcome to Technoir.
      </Typography>
    </>
  );
};

export default Home;