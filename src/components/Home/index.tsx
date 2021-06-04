import { Typography, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  image: {
    margin: theme.spacing(4, 'auto'),
    borderRadius: 8,
    overflow: 'hidden',
    width: 600,
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    '& img': {
      maxWidth: '100%',
    }
  },
}));

export const Home: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <Typography variant="h1" align="center">Welcome to Technoir!</Typography>
      <div className={styles.image}>
        <img src="technoir.png" />
      </div>
      <Typography variant="h3" component="h2" align="center">
        This application is designed specifically for our own fully custom Technoir DnD game. The game is set in 2030 and the technologies are as advanced as they can be. Cybernetics is in every house now and the world is divided into 5 large conglomerates trying to exploit the most that they can from our mortal souls. <br />Join in and have fun!
      </Typography>
    </>
  );
};