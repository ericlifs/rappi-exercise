import styled, { css } from 'styled-components';

export const CategoryName = styled.label`
  margin: 5px 0;
`;

export const CategoryItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  ${({ sublevel }) => !sublevel && css`
    padding: 20px;
    
    ${CategoryName} & {
      font-weight: bold;
    }
  `}

  ${({ sublevel }) => sublevel && css`
    margin-left: 10px;
  `}
`;

