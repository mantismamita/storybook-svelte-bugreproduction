import loremIpsum from './loremIpsum.json';

export const loremIpsumGenerator = (params: { words: number } = { words: 50 }): string => {
  const { words } = params;

  const textByWords = loremIpsum.content.split(' ', words).join(' ');
  const endWithPeriod = (text: string) => (text.slice(-1) !== '.' ? `${text}.` : text);
  return endWithPeriod(textByWords);
};
