import { Typography, Box } from '@material-ui/core';

export const Home: React.FC = () => {
  return (
    <Box>
      <Typography variant="h1">Welcome to Technoir!</Typography>
      <Box marginX={0} marginY={4} borderRadius={8} overflow="hidden" width={600} display="inline-flex" justifyContent="center">
        <img src="technoir.png" />
      </Box>
    </Box>
  );
};