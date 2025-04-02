import { generatorDataGroup } from "../utils/enmu";

//地图 1:墙 2: 地
export enum MapEnum {
  /** 墙 */
  Wall = 1,
  /** 地*/
  Land = 2,
}

export const MapData: any = generatorDataGroup(
  MapEnum.Wall,
  "墙",
  MapEnum.Land,
  "地"
);

// 深色水印路径枚举 /game/sokoban：致命游戏 /game/water: 水波纹 /game/fruit 水果
export enum WaterMarkEnum {
  /** 致命游戏 */
  Sokoban = "/game/sokoban",
  /** 水波纹 */
  Water = "/game/water",
  /** 水果 */
  Fruit = "/game/fruit",
}

export const WaterMarkData: any = generatorDataGroup(
  WaterMarkEnum.Sokoban,
  "致命游戏",
  WaterMarkEnum.Water,
  "水波纹",
  WaterMarkEnum.Fruit,
  "水果"
);
