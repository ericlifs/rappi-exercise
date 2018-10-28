import styled from 'styled-components';

export const ProductWrapper = styled.div`
  width: 20%;
  margin: 10px;
  height: 160px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08);
  border: 1px solid ${({ theme }) => theme.colors.athensGray};
  border-radius: 3px;
  padding: 10px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductSubline = styled.label`
  font-size: 14px;
`;

export const ProductName = styled(ProductSubline)`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

