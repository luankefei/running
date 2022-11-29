import { isPlainObject } from "@reduxjs/toolkit";
import { Fetch, FetchEnhancer } from "./createFetch";
import toHeaders from "./toHeaders";

const toObject = Object.fromEntries;
// Object.fromEntries ||
// ((obj) =>
//   Array.from(obj).reduce(
//     (acc: Record<string, unknown>, [k, v]) => (
//       (acc[k as keyof typeof acc] = v), acc
//     ),
//     {}
//   ));

/**
 * Stringify request body
 */

// TODO: fetch options
const bodify =
  (): FetchEnhancer =>
  (fetch: Fetch) =>
  (url, { body, ...options } = {}) => {
    const headers = toHeaders(options.headers as any);
    const contentType = "content-type";

    if (body instanceof URLSearchParams) {
      // patches old browsers
      if (!headers.get(contentType)) {
        headers.set(
          contentType,
          "application/x-www-form-urlencoded;charset=UTF-8"
        );
      }
      // polyfill for old browsers if needed.
    } else if (isPlainObject(body) || Array.isArray(body)) {
      body = JSON.stringify(body);
      if (headers.get(contentType) === null) {
        headers.set(contentType, "application/json");
      }
    }

    return fetch(url, {
      ...options,
      body,
      headers: toObject(headers),
    });
  };

export default bodify;
