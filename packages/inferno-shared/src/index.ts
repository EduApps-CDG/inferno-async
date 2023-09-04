export const ERROR_MSG =
  'a runtime error occured! Use Inferno in development environment to find the error.';

export const isArray = Array.isArray;

export function isStringOrNumber(o: unknown): o is string | number {
  const type = typeof o;

  return type === 'string' || type === 'number';
}

export function isNullOrUndef(o: unknown): o is undefined | null {
  return o === void 0 || o === null;
}

export function isInvalid(o: unknown): o is null | boolean | undefined {
  return o === null || o === false || o === true || o === void 0;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(o: unknown): o is Function {
  return typeof o === 'function';
}

export function isString(o: unknown): o is string {
  return typeof o === 'string';
}

export function isNumber(o: unknown): o is number {
  return typeof o === 'number';
}

export function isNull(o: unknown): o is null {
  return o === null;
}

export function isUndefined(o: unknown): o is undefined {
  return o === void 0;
}

export function throwError(message?: string): void {
  if (!message) {
    message = ERROR_MSG;
  }
  throw new Error(`Inferno Error: ${message}`);
}

export function warning(message: string): void {
  console.error(message);
}
