/// <reference types="astro/client" />

declare module '*.css';
declare module 'micromodal';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
