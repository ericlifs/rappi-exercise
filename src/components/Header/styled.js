import styled from 'styled-components'
import mediaQueries from 'components/MediaQueries'

export const HeaderWrapper = styled.div`
  height: 100px;
  background: ${({ theme }) => theme.colors.athensGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.porcelain};

  overflow: visible;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex: 1;
  
  ${mediaQueries.mobile`
    height: 50px;
    padding: 0 20px;
  `}
`;

export const BaratonLogo = styled.img`
  width: 175px;
  height: 45px;

  ${mediaQueries.mobile`
    width: 105px;
    height: 25px;
  `}
`;