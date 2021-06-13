import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      error: string;

      background: string;

      text900: string;
      text500: string;
      text100: string;
      title: string;
    }
  }
}


