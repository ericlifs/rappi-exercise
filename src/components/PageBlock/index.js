import styled from 'styled-components'

const PageBlock = styled.div`
  ${({ align }) => align && `align-items: ${align};`}
  ${({ justify }) => justify && `justify-content: ${justify};`}
  flex-direction: ${({ direction }) => direction || 'row'};

  max-width: 1200px;
  overflow-y: auto;
  margin: 0 auto;
  display: flex;
  height: 100%;
  width: 100%;
  overflow: visible;
`

export default PageBlock
