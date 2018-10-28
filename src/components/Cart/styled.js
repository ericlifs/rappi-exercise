import styled, { css } from 'styled-components';

export const CartWrapper = styled.div`
  position: relative;
`;

export const CartButtonWrapper = styled.button`
  background: ${({ theme }) => theme.colors.chambray};
  color: ${({ theme }) => theme.colors.white};

  height: 35px;
  border-radius: 3px;
  cursor: pointer;
  padding: 0 10px;
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
  top: 35px;
  right: 0;
`;

export const ProductsList = styled.div`
  height: 90%;
  overflow-y: scroll;
`;

export const CheckoutButton = styled.button`
  background: ${({ theme }) => theme.colors.chambray};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 3px;
  cursor: pointer;
  padding: 10px;
  width: 100%;
`;