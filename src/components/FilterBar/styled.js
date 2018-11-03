import styled, { css } from 'styled-components'
import mediaQueries from 'components/MediaQueries'

export const FilterBarWrapper = styled.div`
  background: ${({ theme }) => theme.colors.zumthor};

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  position: relative;

  &::after {
    background: ${({ theme }) => theme.colors.zumthor};
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: calc((100vw - 1200px) / 2);
    transform: translateX(100%);

    ${mediaQueries.mobile`
      content: none;
    `};
  }

  ${mediaQueries.mobile`
    background: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.porcelain};

    display: inline-block;
    padding: 20px;
    height: auto;

    ${({ opened }) =>
      !opened &&
      css`
        ${FilterColumn} {
          display: none;
        }
      `}
  `};
`

export const FilterColumn = styled.div`
  align-items: center;
  margin: 0 2%;
  display: flex;

  ${mediaQueries.mobile`
    flex-direction: column;
    margin: 20px 0;
    
    ${({ row }) =>
      row &&
      css`
        justify-content: center;
        flex-direction: row;
      `}
  `};
`

export const Title = styled.label`
  pointer-events: none;

  ${mediaQueries.mobile`
    text-transform: uppercase;
    pointer-events: all;
    justify-content: center;
    display: flex;
  `};
`

export const RangeWrapper = styled.div`
  display: flex;
  padding: 5px 0;
  align-items: center;
  justify-content: center;
`

export const RangeLabel = styled.label`
  width: 30%;
  margin: 0 2%;
  text-align: center;

  ${mediaQueries.mobile`
    width: auto;
  `};
`

export const RangeInput = styled.input`
  width: 30%;
  height: 30px;
  padding: 0 5px;
  font-size: 15px;

  ${mediaQueries.mobile`
    border: 1px solid;
    margin: 0 10px;
    width: 20%;
    border-radius: 3px;
  `};
`

export const CheckboxInput = styled.input`
  margin-left: 10px;
`
