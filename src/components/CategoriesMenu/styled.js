import styled, { css } from 'styled-components'
import mediaQueries from 'components/MediaQueries'

export const CategoriesMenuToggler = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.alto};

  justify-content: center;
  border-radius: 3px;
  margin: 10px auto;
  display: none;
  padding: 8px;
  width: 40px;
  z-index: 3;

  ${mediaQueries.mobile`
    display: flex;
    position: absolute;
    right: 50%;
    transition: right ease-in-out 750ms;
  `};
`

export const CategoriesOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: width ease-in-out 500ms;

  ${mediaQueries.mobile`
    overflow: hidden;
  `};
`

export const CategoriesMenuWrapper = styled.div`
  background: ${({ theme }) => theme.colors.athensGray};
  border-right: 1px solid ${({ theme }) => theme.colors.alto};

  transition: all ease-in-out 500ms;
  overflow-y: auto;
  width: 20%;
  display: flex;
  flex-direction: column;
  height: 100%;

  &::before {
    background: ${({ theme }) => theme.colors.athensGray};
    content: ' ';
    position: absolute;
    top: 100px;
    bottom: 0;
    left: 0;
    width: calc((100vw - 1200px) / 2);

    ${mediaQueries.mobile`
      top: 50px;
    `};
  }

  ${mediaQueries.mobile`
    ${({ opened }) =>
      opened &&
      css`
        width: 100%;

        ${CategoriesMenuToggler} {
          right: 10px;
        }

        ${CategoriesOptionsWrapper} {
          width: 100%;
        }
      `}

    ${({ opened }) =>
      !opened &&
      css`
        ${CategoriesMenuToggler} {
          transform: translateX(50%);
        }

        ${CategoriesOptionsWrapper} {
          width: 0;
        }
      `}
  `};
`

export const CategoriesMenuTogglerWrapper = styled.div`
  justify-content: center;
  position: relative;
  margin: 0 auto;
  display: flex;
  width: 95%;
`

export const CategoryTitle = styled.label`
  font-size: 18px;
`
