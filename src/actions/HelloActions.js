/* eslint-disable */

// action types
export const SAY_HELLO = '@@SAY_HELLO'

/* eslint-enable */

export function sayHello(name) {
  return {
    type: SAY_HELLO,
    name
  }
}
