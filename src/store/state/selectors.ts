import { flow } from 'lodash';
import { RootState } from '..';

export const routeSelector = flow((state: RootState) => state.router.route);