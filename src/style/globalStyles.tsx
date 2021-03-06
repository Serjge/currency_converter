import { createGlobalStyle, DefaultTheme } from 'styled-components';

export type GlobalThemeProps = {
  theme: DefaultTheme;
};

export const GlobalStyle = createGlobalStyle<GlobalThemeProps>`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font-family: "Kanit", sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0 auto;
    background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
    color: ${({ theme: { fontColor } }) => fontColor};
  }
`;
