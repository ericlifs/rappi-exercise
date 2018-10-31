import styled from 'styled-components';
import mediaQueries from 'components/MediaQueries';

export const ProductsListWrapper = styled.div`
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 20px;
`;

export const ProductsWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  transition: all ease-in-out 500ms;

  ${mediaQueries.mobile`
    overflow-y: ${({ menuOpened }) => menuOpened ? 'hidden' : 'auto'};
    width: ${({ menuOpened }) => menuOpened ? '0' : '80%'};

    flex: 1;
  `}
`;

export const NoResults = styled.label`
  padding: 50px;
  text-align: center;
`;