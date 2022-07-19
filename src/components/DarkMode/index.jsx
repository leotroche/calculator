import * as S from './styles'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

function DarkMode({ theme, setTheme }) {
  const changeTheme = () => {
    if (theme === 'lightMode') return setTheme('darkMode')
    if (theme === 'darkMode') return setTheme('lightMode')
  }

  return (
    <S.DarkMode onClick={changeTheme}>
      {theme === 'lightMode' ? <MdDarkMode /> : <MdLightMode />}
    </S.DarkMode>
  )
}

export default DarkMode
