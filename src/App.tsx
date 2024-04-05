import { Container } from './components/GlobalStyles';
import Header from './components/Header';
import GlobalStyles from './assets/styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './assets/styles/themes/default'
import Home from './pages/Home/index';
import Carrinho from './pages/Carrinho';
import { CarrinhoProvider } from './context/CarrinhoContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CarrinhoProvider>
        <Container>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
          </BrowserRouter>
        </Container>

      </CarrinhoProvider>
    </ThemeProvider >
  )
}

export default App
