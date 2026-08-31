import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: Record<string, string|number>;
    typography?: {
      fonts: string[],
      fontSizes: Record<string, string>
    }
    heights: {
      header: string;
      footer: string;
      content: string;
    }
  }
}