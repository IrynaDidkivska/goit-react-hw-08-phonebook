import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
body,
p,
h1,
h2,
h3,
h4 {
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
   width:100%;
  height: auto;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}`;
