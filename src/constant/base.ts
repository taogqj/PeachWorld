import { generatorDataGroup } from "../utils/enmu";

//地图 1:墙 2: 地
export enum MapEnum {
  /** 墙 */
  Wall = 1,
  /** 地*/
  Land = 2,
}

export const MapData = generatorDataGroup(
  MapEnum.Wall,
  "墙",
  MapEnum.Land,
  "地"
);
