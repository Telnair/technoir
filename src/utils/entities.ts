export type ISODate = string;
export type DamageRange = number | 'D3' | 'D6' | 'D3+3' | 'D6+3';
export type StrengthRange = number | '+1' | '+2' | '+3' | '+4' | '+5' | 'x2' | 'User';
export type AttacksRange = number | 'D3' | 'D6';

export type DataType = 'weapon' | 'character' | 'article' | 'ability';

export interface BaseDataItem {
  id: string;
  name: string;
  type: DataType;
  createdAt: string;
}

export type DataItem = Weapon | Ability;

type WeaponGrade = 'common' | 'uncommon' | 'rare' | 'legendary';

type WeaponCategory = 
    'pistol' 
  | 'rifle' 
  | 'sniper' 
  | 'shotgun' 
  | 'launcher'
  | 'melee';

export interface Weapon extends BaseDataItem {
  type: 'weapon';
  category: WeaponCategory;
  grade: WeaponGrade;
  strength: StrengthRange;
  attacks: AttacksRange;
  damage: DamageRange;
  abilities: Ability[];
}

export interface Ability extends BaseDataItem {
  type: 'ability';
  description: string;
}