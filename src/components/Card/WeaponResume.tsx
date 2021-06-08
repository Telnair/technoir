import { Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Weapon } from '../../utils/entities';
import { ReactComponent as DamageIcon } from '../../assets/svg/broken-heart.svg';
import { ReactComponent as StrengthIcon } from '../../assets/svg/cracked-shield.svg';
import { ReactComponent as PrecisionIcon } from '../../assets/svg/archery-target.svg';
import { ReactComponent as AttacksMeleeIcon } from '../../assets/svg/machete.svg';
import { ReactComponent as AttacksRangedIcon } from '../../assets/svg/bullets.svg';

const useStyles = makeStyles((theme: Theme) => ({
  info: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    color: theme.palette.common.white,
    marginTop: 'auto',
    '& span': {
      color: theme.palette.primary.main,
    },
    '& svg': {
      width: 20,
      height: 20,
    },
  },
  tags: {
    display: 'flex',
    justifyContent: 'center',
    textTransform: 'uppercase',
  },
  tag: {
    padding: theme.spacing(0.2, 1, 0.3),
    background: theme.palette.primary.main,
    '&:not(:last-of-type)': {
      marginRight: theme.spacing(1),
    }
  },
  wrapper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flexGrow: 1,
  },
}));

interface WeaponResumeProps {
  item: Weapon;
}

export const WeaponResume: React.FC<WeaponResumeProps> = (props) => {
  const { item } = props;
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <div className={styles.tags}>
        <Typography className={styles.tag} variant="body1">{item.category}</Typography>
        <Typography className={styles.tag} variant="body1">{item.grade}</Typography>
      </div>
      <div className={styles.info}>
        <Typography variant="body2" title="attacks">
          {item.category === 'melee' ? <AttacksMeleeIcon /> : <AttacksRangedIcon />} <span>{item.attacks}</span>
        </Typography>
        <Typography variant="body2" title="precision"><PrecisionIcon /> <span>{item.precision}</span></Typography>
        <Typography variant="body2" title="strength"><StrengthIcon /> <span>{item.strength}</span></Typography>
        <Typography variant="body2" title="damage"><DamageIcon /> <span>{item.damage}</span></Typography>
      </div>
    </div>
  );
};