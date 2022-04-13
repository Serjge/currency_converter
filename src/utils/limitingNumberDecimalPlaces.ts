const NOT_DOT_IN_LINE = -1;
const INDEX_START_STRING = 0;
const INDEX_END_STRING = 3;

export const limitingNumberDecimalPlaces = (value: string): string => {
  if (value.indexOf('.') !== NOT_DOT_IN_LINE) {
    return value.substring(INDEX_START_STRING, value.indexOf('.') + INDEX_END_STRING);
  }
  return value;
};
