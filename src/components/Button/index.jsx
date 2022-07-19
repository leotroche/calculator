import * as S from './styles'
import { resolve, screen } from '../../js/logic'

const Button = ({ children, symbol, value, setScreen }) => {
  const handleButton = () => {
    resolve(symbol, value)
    setScreen(screen)
  }

  return <S.Button onClick={handleButton}>{children}</S.Button>
}

export default Button
