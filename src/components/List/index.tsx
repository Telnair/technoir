import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Route } from '../../store/routes';
import { DataItem, DataType } from '../../utils/entities';
import { Card } from '../Card';

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {

  },
  search: {

  },
  grid: {
    display: 'grid',
    gap: theme.spacing(2, 2),
    gridTemplateColumns: '1fr 1fr 1fr',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    }
  },
}));

interface ListProps<T> {
  data: T[];
  createRoute?: Route;
}

const typeToRoute: Record<DataType, Route> = {
  'weapon': Route.Weapon,
  'article': Route.Article,
  'character': Route.Character,
};

export const List = <T extends DataItem>(props: ListProps<T>) => {
  const { data, createRoute } = props;
  const styles = useStyles();

  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        {createRoute ? (
          <Card<T> routeName={createRoute} isNew />
        ) : null}
        {data.map(item => (
          <Card<T> routeName={typeToRoute[item.type]} routeParams={{ id: item.id }} key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
