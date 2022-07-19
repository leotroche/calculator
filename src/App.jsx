import './App.css'
import {
  Button,
  ButtonBox,
  Calculator,
  DarkMode,
  Footer,
  Header,
  Screen,
  Themes,
  Wrapper
} from './components'

import { useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import { ThemeProvider } from 'styled-components'

import buttons from './js/buttons'

function App() {
  const [screen, setScreen] = useState('')
  const [theme, setTheme] = useLocalStorage('theme', 'darkMode')

  return (
    <ThemeProvider theme={Themes[theme]}>
      <Wrapper>
        <Header>
          Calculator
          <DarkMode theme={theme} setTheme={setTheme} />
        </Header>
        <Calculator>
          <Screen screen={screen} />
          <ButtonBox>
            {buttons.map((button) => (
              <Button
                key={button.value}
                value={button.value}
                symbol={button.symbol}
                setScreen={setScreen}
              >
                {button.symbol}
              </Button>
            ))}
          </ButtonBox>
        </Calculator>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
