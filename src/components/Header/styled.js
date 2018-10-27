import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: ${({ height }) => height}px;
  background: ${({ theme }) => theme.colors.athensGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.porcelain};

  overflow: visible;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex: 1;
`;

export const BaratonLogo = styled.img`
  width: 175px;
  height: 175px;
`;