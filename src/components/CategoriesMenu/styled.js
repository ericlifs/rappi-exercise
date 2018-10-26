import styled from 'styled-components';

export const CategoriesMenuWrapper = styled.div`
  background: ${({ theme }) => theme.colors.athensGray};
  border-right: 2px solid ${({ theme }) => theme.colors.alto};

  overflow-y: auto;
  width: 20%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;