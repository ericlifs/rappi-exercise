import styled from 'styled-components';

export const CartProductWrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const CartProductColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartProductQuantity = styled.div`
  display: flex;
  align-items: baseline;
`;

export const CartProductInfo = styled.label`
  font-size: 14px;
`;

export const Quantity = styled(CartProductInfo)`
  margin: 0 10px;
`;

export const CartProductOperation = styled(CartProductInfo)`
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;