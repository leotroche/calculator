import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  transition: color 0.2s ease;
  color: ${({ theme }) => theme.color};

  svg {
    font-size: 2.5rem;
  }
`

export const Span = styled.span`
  font-size: 1.25rem;
`
