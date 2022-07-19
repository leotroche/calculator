import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100vh;

  display: grid;
  place-content: center;

  transition: background-color 0.2s ease;
  background-color: ${({ theme }) => theme.wrapperBg};
`
