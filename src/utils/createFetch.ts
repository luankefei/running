export type Fetch = typeof fetch;
export type FetchReturn = ReturnType<Fetch>;

type ExtractGeneric<T> = T extends FetchEnhancer<infer X> ? X : never;
type SpreadGeneric<T extends readonly [...any]> = T extends readonly [
  infer L,
  ...infer R
]
  ? ExtractGeneric<L> & SpreadGeneric<R>
  : unknown;

export type FetchCreate = <
  F extends Fetch,
  FEs extends readonly FetchEnhancer[]
>(
  fetch: F,
  args: FEs
) => (
  url: Parameters<F>[0],
  options?: Parameters<F>[1] & SpreadGeneric<FEs>
) => FetchReturn;

/**
 * Enhance fetch
 *
 * **Example**
 *
 * ```ts
 * // with extra arguments
 * type FooInit = {foo?: boolean}
 * const foo = (): FetchEnhancer<FooInit> => (fetch) => (url, {foo, ...options}) => {
 *   if (foo) {
 *     // ...
 *   }
 *   return fetch(url, options)
 * }
 *
 * // no extra arguments
 * const bar = (): FetchEnhancer => (fetch) => (url, options) => {
 *   return fetch(url, options)
 * }
 *
 * const myFetch = foo()(bar()(fetch))
 * ```
 */

// eslint-disable-next-line @typescript-eslint/ban-types
export type FetchEnhancer<Extra = {}> = <F extends Fetch>(
  fetch: F
) => (url: Parameters<F>[0], options?: Parameters<F>[1] & Extra) => FetchReturn;

type FetchCompose = <FEs extends FetchEnhancer[]>(
  ...args: FEs
) => <F extends Fetch>(
  fetch: F
) => (url: Parameters<F>[0], options?: Parameters<F>[1]) => FetchReturn;

// redux 组合中间件数组的方式，通过数组的 reduce 方法，实现执行每一个中间件，强化 dispatch
const compose =
  (...funcs: ((...args: any[]) => any)[]) =>
  (arg: Fetch) =>
    funcs.reduceRight((prev, f) => f(prev), arg);

/**
 * Compose fetch
 *
 * **Example**
 *
 * ```ts
 * const myFetch = (myCompose as FetchCompose)(query, bodify)(fetch)
 * ```
 */
export const composeFetch: FetchCompose = compose;

/**
 * ```ts
 * import {createFetch, query, bodify} from 'create-fetch'
 *
 * const myFetch = createFetch(fetch, <const>[
 *   query(),
 *   bodify(),
 * ])
 * ```
 */
export const createFetch: FetchCreate = (
  fetch: Fetch,
  enhancers: readonly FetchEnhancer[] = []
): any => compose(...enhancers)(fetch);

export default createFetch;
