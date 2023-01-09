declare module 'visual' {
  export interface Visual {
    src: string;
    width: number;
    height: number;
    webpSrc?: string;
    srcset?: string;
    webpSrcset?: string;
    preview?: string;
    legend?: string;
    author?: string;
    copyright?: string | null;
    credits?: string | null;
    media?: string;
    sizes?: string;
    lazyload?: boolean;
  }
}
