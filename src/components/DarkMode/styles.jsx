import styled from 'styled-components'

export const DarkMode = styled.button`
  background: none;
  border: none;
  transition: color 0.2s ease;
  color: ${({ theme }) => theme.color};
  font-size: 2.5rem;
`
