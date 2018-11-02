import styled, { css } from 'styled-components';
import mediaQueries from 'components/MediaQueries';

export const CartWrapper = styled.div`
  position: relative;

  ${mediaQueries.mobile`
    position: static;
  `}
`;

export const CartButtonWrapper = styled.button`
  background: ${({ theme }) => theme.colors.chambray};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 3px;
  min-width: 100px;
  cursor: pointer;
  padding: 0 10px;
  font-size: 14px;
  height: 35px;

  ${mediaQueries.mobile`
    font-size: 16px;
  `}
`;

export const ProductsList = styled.div`
  height: 90%;
  overflow-y: scroll;
`;

export const CartList = styled.div`
  ${({ opened }) => opened && css`
    height: 350px;
    opacity: 1;
  `}

  ${({opened}) => !opened && css`
    height: 0;
    opacity: 0;
  `}

  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08);
  transition: all ease-in-out 750ms;
  background: white;
  position: absolute;
  width: 270px;
  z-index: 2;
  top: 35px;
  right: 0;

  ${mediaQueries.mobile`
    justify-content: space-between;
    flex-direction: column;
    width: inherit;
    display: flex;
    z-index: 10;
    top: 50px;
    left: 0;
    overflow: hidden;

    ${({ opened }) => opened && css`
      height: calc(100vh - 50px);
    `}
  `}
`;

export const CheckoutButton = styled.button`
  background: ${({ theme }) => theme.colors.chambray};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 3px;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  font-size: 15px;
`;