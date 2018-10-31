import styled, { css } from 'styled-components';
import mediaQueries from 'components/MediaQueries';

export const CategoriesMenuWrapper = styled.div`
  background: ${({ theme }) => theme.colors.athensGray};
  border-right: 1px solid ${({ theme }) => theme.colors.alto};

  transition: all ease-in-out 500ms;
  overflow-y: auto;
  width: 20%;
  display: flex;
  flex-direction: column;
  height: 100%;

  &::before {
    background: ${({ theme }) => theme.colors.athensGray};
    content: ' ';
    position: absolute;
    top: 100px;
    bottom: 0;
    left: 0;
    width: calc((100vw - 1200px) / 2);

    ${mediaQueries.mobile`
      top: 50px;
    `}
  }

  ${mediaQueries.mobile`
    ${({ opened }) => opened && css`
      width: 100%;
    `}
  `}
`;

export const CategoriesMenuTogglerWrapper = styled.div`
  justify-content: flex-end;
  margin: 0 auto;
  display: flex;
  width: 95%;
`;

export const CategoriesMenuToggler = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.alto};

  transition: all ease-in-out 500ms;
  justify-content: center;
  border-radius: 3px;
  margin: 10px auto;
  display: none;
  padding: 8px;
  width: 40px;
  z-index: 3;

  ${mediaQueries.mobile`  
    display: flex;

    ${({ opened }) => opened && css`
      margin: 10px 0;
    `}
  `}
`;

export const CategoriesOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  transition: all ease-in-out 500ms;

  ${mediaQueries.mobile`
    overflow: hidden;

    width: ${({ opened }) => opened ? '100%' : '0'};
  `}
`;