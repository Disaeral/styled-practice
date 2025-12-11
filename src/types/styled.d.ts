import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      secondary: string;
    };
    heights: {
      header: string;
      footer: string;
      content: string;
    }
  }
}