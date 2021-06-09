export type ISODate = string;
export type DamageRange = number | 'D3' | 'D6' | 'D3+3' | 'D6+3';
export type StrengthRange = number | '+1' | '+2' | '+3' | '+4' | '+5' | 'x2' | 'User';
export type AttacksRange = number | 'D3' | 'D6';
export type PrecisionRange = '2+' | '3+' | '4+' | '5+';

export type DataType = 'weapon' | 'character' | 'article' | 'ability';

export interface BaseDataItem {
  id: string;
  type: DataType;
  createdAt: string;
  name: string;
}

export type DataItem = Weapon | Ability | Article | Character;

export type Trauma = 'head' | 'legs' | 'arms';

type WeaponGrade = 'common' | 'rare' | 'elite';

type WeaponCategory = 
    'pistol' 
  | 'shotgun' 
  | 'rifle' 
  | 'sniper' 
  | 'launcher'
  | 'melee';

export interface Weapon extends BaseDataItem {
  type: 'weapon';
  grade: WeaponGrade;
  category: WeaponCategory;
  attacks: AttacksRange;
  precision: PrecisionRange;
  strength: StrengthRange;
  damage: DamageRange;
  abilities: WeaponAbility[];
}

export interface WeaponAbility extends BaseDataItem {
  type: 'ability';
  description: string;
  limitation: 'melee' | 'ranged' | null;
}

type Stat = 'strength' | 'resilience' | 'agility' | 'intellect' | 'health';
type StatTuple = [ Stat, number ];

export interface Ability extends BaseDataItem {
  type: 'ability';
  description: string;
  statsBonus: StatTuple[];
  price: number;
  requirements: string[];
  tags: string[];
}

export interface Character extends BaseDataItem {
  type: 'character';
  age: number;
  motherland: string;
  biography: string;
  appearance: string;
  principles: string;
  goal: string;
  hype: string;
  strength: number;
  resilience: number;
  agility: number;
  intellect: number;
  health: number;
  abilities: Ability[];
  traumas: Trauma[];
  money: number;
  totalStatPoints: number;
  totalUsedStatPoints: number;
  totalUpgradePoints: number;
  totalUsedUpgradePoints: number;
}

export interface Article extends BaseDataItem {
  type: 'article';
  tags: string[];
  content: string;
  hiddenContent: string;
}