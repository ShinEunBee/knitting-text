declare module "save-svg-as-png" {
  export interface SaveOptions {
    scale?: number;
    encoderType?: string;    // "image/png" 등
    encoderOptions?: number; // 0~1
    backgroundColor?: string | null;
    left?: number;
    top?: number;
    width?: number;
    height?: number;
    modifyCss?: (css: string) => string;
    [key: string]: any;
  }

  export function saveSvgAsPng(
    el: Element,
    fileName: string,
    options?: SaveOptions
  ): void;

  export function svgAsPngUri(
    el: Element,
    options?: SaveOptions
  ): Promise<string>;
}