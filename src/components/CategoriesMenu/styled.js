import styled from 'styled-components';

import { HEADER_HEIGHT } from 'components/Header';

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
    top: ${HEADER_HEIGHT}px;
    bottom: 0;
    left: 0;
    width: calc((100vw - 1200px) / 2);
  }
`;