import styled  from 'styled-components';
import mediaQueries from 'components/MediaQueries';

export const SearchByTermWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 20px;
  position: relative;
  padding-bottom: 0;

  ${mediaQueries.mobile`
    background: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.porcelain};

    display: inline-block;
    padding: 20px;
    height: auto;
  `}
`;

export const SearchControl = styled.input`
  width: 150px;
  height: 30px;
  padding: 0 5px;
  margin-left: 10px;
  font-size: 15px;

  ${mediaQueries.mobile`
    border: 1px solid;
    margin: 0;
    width: 98%;
    margin-top: 10px;
    border-radius: 3px;
  `}
`;