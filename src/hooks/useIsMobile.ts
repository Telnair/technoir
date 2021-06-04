import { useMediaQuery } from '@material-ui/core';
import { defaultTheme } from '../theme/default';

export const useIsMobile = () => {
  return useMediaQuery(defaultTheme.breakpoints.down('sm'));
};