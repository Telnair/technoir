import { Typography, Box } from '@material-ui/core';

export const Home: React.FC = () => {
  return (
    <Box>
      <Typography variant="h1" align="center">Welcome to Technoir!</Typography>
      <Box marginX="auto" marginY={4} borderRadius={8} overflow="hidden" width={600} justifyContent="center" display="flex">
        <img src="technoir.png" />
      </Box>
      <Typography variant="h2" align="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error sequi ullam ipsa libero optio ex nulla. Nihil amet ratione, reiciendis laborum earum eum asperiores. Accusamus, sed? Labore nisi velit sunt.</Typography>
    </Box>
  );
};