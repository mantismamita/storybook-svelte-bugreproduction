declare module 'a11y' {
  type BooleanAttributes =
    | 'aria-busy'
    | 'aria-disabled'
    | 'aria-expanded'
    | 'aria-hidden'
    | 'aria-labelled-by'
    | 'aria-modal'
    | 'aria-pressed'
    | 'aria-haspopup';
  type StringAttributes = 'aria-controls' | 'aria-describedby' | 'aria-description' | 'aria-label' | 'aria-labelledby' | 'aria-placeholder';

  export type AriaAttributes = Record<BooleanAttributes, boolean> & Record<StringAttributes, string>;
}
