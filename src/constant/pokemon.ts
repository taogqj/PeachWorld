import { generatorDataGroup } from "../utils/enmu";

/** 属性 一般  火 水 草 电 冰 格斗 毒 地面 飞行 超能力 虫 岩石 幽灵 龙 恶 钢 妖精 */
export enum AttributeEnum {
    /** 一般 */
    General = '一般',
    /** 火 */  
    Fire = '火',
    /** 水 */
    Water = '水',
    /** 草 */
    Grass = '草',
    /** 电 */
    Electric = '电',
    /** 冰 */
    Ice = '冰',
    /** 格斗 */
    Fighting = '格斗',
    /** 毒 */
    Poison = '毒',     
    /** 地面 */
    Ground = '地面',
    /** 飞行 */
    Flying = '飞行',
    /** 超能力 */
    Psychic = '超能力',
    /** 虫 */
    Bug = '虫',
    /** 岩石 */
    Rock = '岩石',
    /** 幽灵 */
    Ghost = '幽灵',
    /** 龙 */
    Dragon = '龙',
    /** 恶 */
    Dark = '恶',
    /** 钢 */
    Steel = '钢',
    /** 妖精 */
    Fairy = '妖精',
}

export const AttributeData: any = generatorDataGroup(
    AttributeEnum.General,
    '一般',
    AttributeEnum.Fire,
    '火',
    AttributeEnum.Water,
    '水',
    AttributeEnum.Grass,
    '草',
    AttributeEnum.Electric,
    '电',
    AttributeEnum.Ice,
    '冰',
    AttributeEnum.Fighting,
    '格斗',
    AttributeEnum.Poison,
    '毒',
    AttributeEnum.Ground,
    '地面',
    AttributeEnum.Flying,
    '飞行',
    AttributeEnum.Psychic,
    '超能力',
    AttributeEnum.Bug,
    '虫',
    AttributeEnum.Rock,
    '岩石',
    AttributeEnum.Ghost,
    '幽灵',
    AttributeEnum.Dragon,
    '龙',
    AttributeEnum.Dark,
    '恶',
    AttributeEnum.Steel,
    '钢',
    AttributeEnum.Fairy,
    '妖精',
)

export const AttributeColorData: any = generatorDataGroup(
    AttributeEnum.General,
    '#dcdcdc',
    AttributeEnum.Fire,
    '#ff6900',
    AttributeEnum.Water,
    '#14b9ff',
    AttributeEnum.Grass,
    '#b4f000',
    AttributeEnum.Electric,
    '#ffe100',
    AttributeEnum.Ice,      
    '#14f5ff',
    AttributeEnum.Fighting,
    '#dc6900',
    AttributeEnum.Poison,
    '#d28cd2',
    AttributeEnum.Ground,
    '#fac85a',
    AttributeEnum.Flying,
    '#78dcff',
    AttributeEnum.Psychic,
    '#f08cdc',
    AttributeEnum.Bug,
    '#46c846',
    AttributeEnum.Rock,
    '#b48c64',
    AttributeEnum.Ghost,
    '#a08cff',
    AttributeEnum.Dragon,
    '#5078dc',
    AttributeEnum.Dark,
    '#787878',
    AttributeEnum.Steel,
    '#aac8f0',
    AttributeEnum.Fairy,
    '#ffafdc',
)


/** 地区 kanto:关都地区 johto:城都地区  hoenn:丰缘地区 sinnoh:神奥地区 unova:合众地区 kalos:卡洛斯地区 alola:阿罗拉地区 galar:伽勒尔地区 hisui:洗翠地区 paldean:帕底亚地区 */
export enum RegionEnum {
    /** kanto:关都地区 */
    Kanto = 'kanto',
    /** johto:城都地区 */
    Johto = 'johto',
    /** hoenn:丰缘地区 */
    Hoenn = 'hoenn',
    /** sinnoh:神奥地区 */
    Sinnoh = 'sinnoh',
    /** unova:合众地区 */
    Unova = 'unova',
    /** kalos:卡洛斯地区 */
    Kalos = 'kalos',
    /** alola:阿罗拉地区 */
    Alola = 'alola',
    /** galar:伽勒尔地区 */
    Galar = 'galar',
    /** hisui:洗翠地区 */
    Hisui = 'hisui',
    /** paldean:帕底亚地区 */
    Paldean = 'paldean',
}

export const RegionData: any = generatorDataGroup(
    RegionEnum.Kanto,
    '关都地区',
    RegionEnum.Johto,
    '城都地区',
    RegionEnum.Hoenn,
    '丰缘地区',
    RegionEnum.Sinnoh,
    '神奥地区',
    RegionEnum.Unova,
    '合众地区',                 
    RegionEnum.Kalos,           
    '卡洛斯地区',
    RegionEnum.Alola,
    '阿罗拉地区',
    RegionEnum.Galar,
    '伽勒尔地区',
    RegionEnum.Hisui,
    '洗翠地区',
    RegionEnum.Paldean,
    '帕底亚地区',
)