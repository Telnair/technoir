import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Route } from '../../store/routes';
import { DataItem, DataType } from '../../utils/entities';
import { Card } from '../Card';

const useStyles = makeStyles((theme: Theme) => ({
  search: {

  },
  grid: {
    display: 'grid',
    gap: theme.spacing(4, 2),
    gridTemplateColumns: '1fr 1fr 1fr',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    }
  },
}));

interface ListProps {
  data: DataItem[];
  createRoute?: Route;
}

const typeToRoute: Record<DataType, Route> = {
  'weapon': Route.Weapon,
  'article': Route.Article,
  'character': Route.Character,
  'ability': Route.Ability,
};

export const List = (props: ListProps) => {
  const { data, createRoute } = props;
  const styles = useStyles();

  return (
    <section>
      <div className={styles.grid}>
        {createRoute ? (
          <Card routeName={createRoute} isNew />
        ) : null}
        {data.map(item => (
          <Card routeName={typeToRoute[item.type]} routeParams={{ id: item.id }} key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
