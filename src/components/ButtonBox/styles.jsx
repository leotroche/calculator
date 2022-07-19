import styled from 'styled-components'

export const ButtonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(4, auto);
  place-content: center;
  gap: 1rem;
  width: 100%;

  transition: background-color 0.2s ease;
  background-color: ${({ theme }) => theme.bg};
  border-radius: var(--border-radius);
  padding: 2rem;
`
