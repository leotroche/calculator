import styled from 'styled-components'

export const Screen = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: var(--screen-h);
  padding: 0 2rem;
  overflow: hidden;
  border-radius: var(--border-radius);

  font-size: 2rem;
  transition: 0.2s ease;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bg};
`
