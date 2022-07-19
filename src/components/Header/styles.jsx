import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  font-weight: 700;
  transition: color 0.2s ease;
  color: ${({ theme }) => theme.color};
`
