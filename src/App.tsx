import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from './pages/Header/views/Header';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Container maxWidth="lg"></Container>
		</BrowserRouter>
	);
}

export default App;
