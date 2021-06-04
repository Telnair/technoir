import { Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Route } from '../../store/routes';
import { Link } from '../Link';

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    transition: 'color .2s',
    color: (props: Pick<NavigationLinkProps, 'isActive'>) => props.isActive
      ? theme.palette.common.white
      : theme.palette.primary.contrastText,
    '&:hover': {
      color: theme.palette.common.white,
    }
  }
}));

interface NavigationLinkProps {
  isActive: boolean;
  routeName: Route;
}

export const NavigationLink: React.FC<NavigationLinkProps> = (props) => {
  const { routeName, children, isActive } = props;
  const styles = useStyles({ isActive });

  return (
    <Typography variant="body2" className={styles.wrapper}>
      <Link routeName={routeName}>{children}</Link>
    </Typography>
  );
};