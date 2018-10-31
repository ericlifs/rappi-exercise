import styled from 'styled-components';
import mediaQueries from 'components/MediaQueries';

export const PageWrapper = styled.div`
  justify-content: ${({ justify }) => justify || 'center'};
  flex-direction: ${({ withSideBar }) => withSideBar ? 'row' : 'column'};
  ${({ withHeader }) => withHeader && 'height: calc(100% - 100px);'}
  display: flex;
  
  ${mediaQueries.mobile`
    ${({ withHeader }) => withHeader && 'height: calc(100% - 50px);'}
  `}
`;

export default PageWrapper;