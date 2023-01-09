import type { ComponentProps } from 'svelte';
import type BrandLogo from '$lib/BrandLogo/BrandLogo.svelte';

type BrandLogoComponentProps = ComponentProps<BrandLogo>;
export const getLogoSrc = (brandName: BrandLogoComponentProps['brandName'], format: BrandLogoComponentProps['format'] = 'square') => {
  if (brandName === 'radiofrance' && format === 'square') {
    return `./dist/logos/${brandName}/${brandName}-${format}.png`;
  }
  return `./dist/logos/${brandName}/${brandName}-${format}.svg#${brandName}-${format}`;
};
