import customProperties from '$lib/assets/customProperties.json';

interface Properties {
  [key: string]: string;
}
export interface PropertyObj {
  varName: keyof typeof properties;
  color: string;
}

const properties: Properties = customProperties['custom-properties'];

export const styleToString = (style: Properties) => {
  return Object.keys(style).reduce(
    (acc, key) =>
      acc +
      key
        .split(/(?=[A-Z])/)
        .join('-')
        .toLowerCase() +
      ':' +
      style[key] +
      ';',
    '',
  );
};

export const getPropertyListByName = (propertyExp: RegExp, sortFunc?: (a: PropertyObj, b: PropertyObj) => number): PropertyObj[] =>
  Object.keys(properties)
    .filter((key) => propertyExp.test(key))
    .reduce((prev: PropertyObj[], key: string) => {
      const next: PropertyObj[] = [...prev, { varName: key, color: properties[key] }];

      return next;
    }, [])
    .sort(sortFunc);
