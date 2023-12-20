import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Container from '@mui/material/Container';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </Container>
    </BrowserRouter>
  )
}

export default App
