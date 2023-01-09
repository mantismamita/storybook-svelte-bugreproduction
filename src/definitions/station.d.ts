declare module 'station' {
  import type brands from '$utils/brand';

  type BrandName = typeof brands[number]; // https://stackoverflow.com/questions/59857223/how-to-convert-typescript-types-of-strings-to-array-of-strings

  export type StationName = Omit<BrandName, 'radiofrance'>;
}
