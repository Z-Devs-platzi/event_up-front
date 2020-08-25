import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		--primary-color: #125E68;
		--secondary-color: #FFD43B;
		--black: #373737;
		--white: #FFFFFF;
		--grey: #808080;
		--light-green: #DBE7E8;
		--light-grey-1: #F9F9F9;
		--light-grey-2: #CDCDCD;
		--published: #3EE778;
		--error: #FFCFC9;
		--success: #C6FFD9;
		--gradient-green: linear-gradient(var(---primary-color) 50%, #417E86);
		--gradient-light-green: linear-gradient(#DBE7E8 40%, #E3ECED);
		--shadow: 0 4px 8px rgba(55,55,55,.1);
	}
  html {
    box-sizing: border-box;
		font-family: 'Open Sans', sans-serif;
		color: var(--black);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

  }
  *, *::before, *::after {
    box-sizing: inherit;
	}
	body,
	div,
	header,
	section,
	article,
	aside,
	nav,
	ul,
	ol,
	li,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
  }
  ul {
    list-style: none;
  }
  button {
    background: transparent;
    border: 0;
    outline: 0;
	}
`;
