import styled from 'styled-components'

export const Button = styled.button`
  width: var(--button-w);
  height: var(--button-h);

  color: ${({ theme }) => theme.buttonColor};
  background-color: ${({ theme }) => theme.buttonBg};
  border-radius: var(--button-r);
  border: none;

  transition: 0.2s ease;
  box-shadow: 0 0.25rem 0 ${({ theme }) => theme.buttonShadow};

  &:active {
    transform: translateY(0.25rem);
    box-shadow: 0 0 0 ${({ theme }) => theme.buttonShadow};
  }
`
