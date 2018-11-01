import styled, { css } from 'styled-components';
import mediaQueries from 'components/MediaQueries';

export const SortBarWrapper = styled.div`
  background: ${({ theme }) => theme.colors.zumthor};

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  height: 60px;

  &::after {
    background: ${({ theme }) => theme.colors.zumthor};
    content: ' ';
    position: absolute;
    top: 100px;
    right: 0;
    height: 60px;
    width: calc((100vw - 1200px) / 2);
    
    ${mediaQueries.mobile`
      content: none;
    `}
  }

  ${mediaQueries.mobile`
    background: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};

    display: inline-block;
    padding: 20px;
    height: auto;

    ${({ opened }) => !opened && css`
      ${SearchColumn},
      ${SortControl} {
        display: none;
      }
    `}
  `}
`;

export const SortColumn = styled.div`
  align-items: center;
  display: flex;
  flex: 1;

  ${mediaQueries.mobile`
    flex-direction: column;
  `}
`;

export const Title = styled.label`
  pointer-events: none;

  ${mediaQueries.mobile`
    text-transform: uppercase;
    pointer-events: all;
  `}
`;

export const SearchColumn = styled.div`
  display: flex;
  align-items: center;

  ${mediaQueries.mobile`
    margin-top: 10px;
    flex-direction: column;
    align-items: flex-start;
  `}
`;

export const SortControl = styled.select`
  width: 150px;
  height: 30px;
  margin-left: 10px;
  font-size: 15px;

  ${mediaQueries.mobile`
    margin: 0;
    border: 1px solid;
    margin-top: 15px;
    width: 98%;
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
    border-radius: 3px;
  `}
`;