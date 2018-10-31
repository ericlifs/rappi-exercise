import styled from 'styled-components';
import mediaQueries from 'components/MediaQueries';

export const CategoriesMenuWrapper = styled.div`
  background: ${({ theme }) => theme.colors.athensGray};
  border-right: 1px solid ${({ theme }) => theme.colors.alto};

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
`;