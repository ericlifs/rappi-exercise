import styled, { css } from 'styled-components';
import mediaQueries from 'components/MediaQueries';

export const ProductsListWrapper = styled.div`
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 20px;
`;

export const ProductsWrapper = styled.div`
  width: ${({ fullwidth }) => fullwidth ? '100' : '80'}%;

  display: flex;
  flex-direction: column;
  transition: all ease-in-out 500ms;

  ${mediaQueries.mobile`
    overflow-y: ${({ menuOpened }) => menuOpened ? 'hidden' : 'auto'};

    ${({ menuOpened }) => menuOpened && css`
      width: 0;
    `}

    ${({ menuOpened }) => !menuOpened && css`
      width: ${({ fullwidth }) => fullwidth ? '100%' : '80%'};
    `}

    flex: 1;
  `}
`;

export const NoResults = styled.label`
  padding: 50px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 20px;
  margin-bottom: 0;
`;