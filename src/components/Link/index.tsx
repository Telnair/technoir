import React from 'react';
import { ConnectedLink } from 'react-router5';
import { BaseLinkProps } from 'react-router5/dist/BaseLink';
import { Route, RouteParams } from '../../store/routes';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  }
}));

interface LinkProps extends Omit<BaseLinkProps, 'router'> {
  routeName: Route;
  routeParams?: RouteParams;
}

export const Link: React.FC<LinkProps> = (props) => {
  const { routeName, routeParams, children, ...rest } = props;
  const styles = useStyles();

  return (
    <ConnectedLink 
      routeName={routeName} 
      routeParams={routeParams}
      className={styles.link}
      {...rest}
    >
      {children}
    </ConnectedLink>
  );
};