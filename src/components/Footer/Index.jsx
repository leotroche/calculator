import * as S from './styles'
import { SiGithub } from 'react-icons/si'

const Footer = () => {
  return (
    <S.Footer>
      <S.Span>By Leonardo Troche</S.Span>
      <a href="https://github.com/leotroche/calculator" target="_blank" rel="noreferrer">
        <SiGithub />
      </a>
    </S.Footer>
  )
}

export default Footer
