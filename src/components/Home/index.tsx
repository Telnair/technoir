import { Typography, Box, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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
    <Box>
      <Typography variant="h1" align="center">Welcome to Technoir!</Typography>
      <Box className={styles.image}>
        <img src="technoir.png" />
      </Box>
      <Typography variant="h3" component="h2" align="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error sequi ullam ipsa libero optio ex nulla. Nihil amet ratione, reiciendis laborum earum eum asperiores. Accusamus, sed? Labore nisi velit sunt.</Typography>
    </Box>
  );
};