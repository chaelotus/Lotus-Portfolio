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
import Contact from './pages/Contact/views/Contact';
import Footer from './pages/Footer/views/Footer';
import MoveToTop from './common/components/MoveToTop';
import SmallSizeNav from './common/components/SmallSizeNav';

const store = createStore(rootReducer);
function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="dark:bg-[#222222] overflow-x-hidden">
					<Header />
					<MoveToTop />
					<Container maxWidth="lg">
						<Lotus />
						<About />
						<Skills />
						<Project />
						<Contact />
					</Container>
					<SmallSizeNav />
					<DetailModal />
					<Footer />
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
