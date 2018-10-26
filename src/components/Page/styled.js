import styled from 'styled-components';

export const PageWrapper = styled.div`
  justify-content: ${({ justify }) => justify || 'center'};
  height: calc(100% - ${({ headerHeight }) => headerHeight}px);
  flex-direction: ${({ withSideBar }) => withSideBar ? 'row' : 'column'};

  height: 100%;
  display: flex;
`;

export default PageWrapper;