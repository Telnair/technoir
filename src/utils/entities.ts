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

export type DataItem = Weapon | Ability;

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
  abilities: Ability[];
}

export interface Ability extends BaseDataItem {
  type: 'ability';
  description: string;
}