import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import Container from '@mui/material/Container';
import Header from './pages/Header/views/Header';
import Lotus from './pages/Lotus/views/Lotus';
import About from './pages/About/views/About';
import Skills from './pages/Skills/views/Skills';
import Project from './pages/Project/views/Project';
import rootReducer from './common/store/Store';
import DetailModal from './pages/Detail/views/DetailModal';

const store = createStore(rootReducer);
function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Container maxWidth="lg">
					<Lotus />
					<About />
					<Skills />
					<Project />
				</Container>
				<DetailModal />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
