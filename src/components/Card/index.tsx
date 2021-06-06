import { fade, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { RouteParams, Route } from '../../store/routes';
import { BaseDataItem, DataItem } from '../../utils/entities';
import { Link } from '../Link';
import { WeaponResume } from './WeaponResume';

interface CardProps<T> {
  routeName: Route;
  routeParams?: RouteParams;
  item?: T,
  isNew?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    justifyContent: ({ isNew }: { isNew: boolean }) => isNew ? 'center' : 'flex-start',
    height: 200,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(3),
    background: fade(theme.palette.common.white, 0.07),
    borderBottom: `5px solid ${theme.palette.primary.light}`,
    transition: 'border-color .2s',
    boxShadow: `0 15px 20px -15px ${theme.palette.primary.main}`,
    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
    [theme.breakpoints.down('sm')]: {
      height: 160,
    },
    '& h2': {
      fontSize: 80,
      position: 'relative',
      zIndex: 1,
      '&:before': {
        content: '""',
        position: 'absolute',
        height: 120,
        width: 120,
        zIndex: -1,
        borderRadius: '50%',
        border: `2px solid ${theme.palette.primary.light}`,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
  },
}));

export const Card = <T extends DataItem>(props: CardProps<T>) => {
  const { item, routeName, routeParams, isNew = false } = props;
  const styles = useStyles({ isNew });

  let content: React.ReactNode = null;

  if (isNew) {
    content = <Typography variant="h2">New</Typography>;
  }
  else {
    if (!item) return null;

    const title = <Typography variant="h3">{item.name}</Typography>;

    let resume = null;

    switch (item.type) {
      case 'weapon':
        resume = <WeaponResume item={item} />;
        break;
    }

    content = (
      <>
        {title}
        {resume}
      </>
    );
  }

  return (
    <Link routeName={routeName} routeParams={routeParams}>
      <article className={styles.card}>
        {content}
      </article>
    </Link>
  );
};