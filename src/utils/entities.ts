export type ISODate = string;
export type DamageRange = number | 'D3' | 'D6' | 'D3+3' | 'D6+3';
export type StrengthRange = number | '+1' | '+2' | '+3' | '+4' | '+5' | 'x2' | 'User';
export type AttacksRange = number | 'D3' | 'D6';
export type PrecisionRange = '2+' | '3+' | '4+' | '5+';

export type DataType = 'weapon' | 'character' | 'article' | 'ability';

export interface BaseDataItem {
  id: string;
  type: DataType;
  name: string;
  createdAt: string;
}

export type DataItem = Weapon | Ability | Article | Character;

export type TraumaType = 'head' | 'legs' | 'arms';

export interface Trauma {
  type: TraumaType;
  penalties: StatTuple[];
}

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
type AbilityTag = 'passive' | 'active' | 'electronics';
type StatTuple = [ Stat, number ];

export interface Ability extends BaseDataItem {
  type: 'ability';
  description: string;
  statsBonus: StatTuple[];
  price: number;
  requirements: string[];
  tags: AbilityTag[];
}

export interface BattleStats {
  strength: number;
  resilience: number;
  agility: number;
  intellect: number;
  health: number;
  abilities: Ability[];
  traumas: Trauma[];
  weapons: Weapon[];
}

export interface Character extends BaseDataItem, BattleStats {
  type: 'character';
  isNPC: boolean;
  age: number;
  motherland: string;
  biography: string;
  appearance: string;
  principles: string;
  goal: string;
  hype: string;
  equippedWeaponsIds: string[];
  availableUpgradePoints: number;
}

export interface CharacterBattleCard extends BattleStats {
  isEnemy: boolean;
  name: string;
  electronicsStatus: 'active' | 'passive' | 'disabled';
  availableActions: number;
  availableAbilities: number;
  availableHP: number;
  noAmmoWeapons: string[];
}

export interface Article extends BaseDataItem {
  type: 'article';
  tags: string[];
  content: string;
  hiddenContent: string;
}