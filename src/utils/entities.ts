export type ISODate = string;
export type DamageRange = number | 'D3' | 'D6' | 'D3+3' | 'D6+3';
export type StrengthRange = number | '+1' | '+2' | '+3' | '+4' | '+5' | 'x2' | 'User';
export type AttacksRange = number | 'D3' | 'D6';

export type DataType = 'weapon' | 'character' | 'article';

export interface BaseDataItem {
  id: string;
  name: string;
  type: DataType;
  createdAt: string;
}

export type DataItem = Weapon;

type WeaponGrade = 'common' | 'uncommon' | 'rare' | 'legendary';

type WeaponCategory = 
    'pistol' 
  | 'rifle' 
  | 'dmr' 
  | 'sniper' 
  | 'shotgun' 
  | 'flamer' 
  | 'launcher' 
  | 'chanelling' 
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
  description: string;
}