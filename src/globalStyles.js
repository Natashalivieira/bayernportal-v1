import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2px;
  padding-left: 2px;
  @media screen and (max-width: 991px) {
    padding-right: 5px;
    padding-left: 5px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#FFD700' : '#3f51b5')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '8px 22px' : '22px 40px')};
  color: #101522;
  font-size: ${({ fontBig }) => (fontBig ? '18px' : '16px')};
  outline: none;
  border: none;
  height: 38px;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#3f51b5' : '#FFD700')};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;