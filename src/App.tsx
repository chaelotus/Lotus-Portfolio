import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from './pages/Header/views/Header';
import Lotus from './pages/Lotus/views/Lotus';
import About from './pages/About/views/About';
import Skills from './pages/Skills/views/Skills';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Container maxWidth="lg">
				<Lotus />
				<About />
				<Skills />
			</Container>
		</BrowserRouter>
	);
}

export default App;
