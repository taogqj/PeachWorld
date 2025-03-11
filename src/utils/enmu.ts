// 为 rest 参数指定类型为 any[]，以解决隐式 any 类型的问题
export function generatorDataGroup(...rest: any[]) {
  if (!rest) {
    /* @ts-ignore */
    return;
  }

  if (rest.length % 2 !== 0) {
    throw new Error("参数数量不匹配");
  }
  const list = [] as any[];
  const map = {};
  for (let i = 0; i < rest.length; i += 2) {
    /* @ts-ignore */
    const id = rest[i] as T;
    const label = rest[i + 1];
    list.push({ id, label });
    Object.assign(map, { [id]: label });
  }
  return [list, map];
}
