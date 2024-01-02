import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from './pages/Header/views/Header';
import Lotus from './pages/Lotus/views/Lotus';
import About from './pages/About/views/About';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Container maxWidth="lg">
				<Lotus />
				<About />
			</Container>
		</BrowserRouter>
	);
}

export default App;
