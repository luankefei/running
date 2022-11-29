const isIterable = (obj: any): boolean =>
  obj != null && typeof Symbol !== "undefined" && Symbol.iterator in obj;

export default function getEntries<T = any>(
  obj: Iterable<[string, T]> | Record<string, T>
): Array<[string, T]> {
  return isIterable(obj)
    ? Array.from(obj as Iterable<[string, T]>)
    : Object.entries(obj as Record<string, T>);
}
