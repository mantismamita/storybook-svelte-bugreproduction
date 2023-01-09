declare module 'button' {
  import type { Mode } from 'mode';

  export type ButtonMode = Mode;
  export type ButtonSize = 'small' | 'medium' | 'large';
  export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
}
