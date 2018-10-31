import styled from 'styled-components';
import mediaQueries from 'components/MediaQueries';

export const SortBarWrapper = styled.div`
  background: ${({ theme }) => theme.colors.zumthor};

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0 20px;

  &::after {
    background: ${({ theme }) => theme.colors.zumthor};
    content: ' ';
    position: absolute;
    top: 100px;
    right: 0;
    height: 60px;
    width: calc((100vw - 1200px) / 2);
    
    ${mediaQueries.mobile`
      top: 50px;
    `}
  }
`;

export const SortColumn = styled.div`
  flex: 1;
`;

export const SearchColumn = styled.div``;

export const SortControl = styled.select`
  width: 150px;
  height: 30px;
  margin-left: 10px;
  font-size: 15px;
`;

export const SearchControl = styled.input`
  width: 150px;
  height: 30px;
  padding: 0 5px;
  margin-left: 10px;
  font-size: 15px;
`;