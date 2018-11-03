import styled from 'styled-components';

export const AddToCartWrapper = styled.button`
  background: ${({ theme }) => theme.colors.chambray};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 3px;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;