import './App.css';
import { useEffect, useState, Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import Container from '@mui/material/Container';
import rootReducer from './common/store/Store';
import WarningScreen from './common/components/WarningScreen';
import Loading from './common/components/Loading';

const Header = lazy(() => import('./pages/Header/views/Header'));
const Lotus = lazy(() => import('./pages/Lotus/views/Lotus'));
const About = lazy(() => import('./pages/About/views/About'));
const Skills = lazy(() => import('./pages/Skills/views/Skills'));
const Project = lazy(() => import('./pages/Project/views/Project'));
const Contact = lazy(() => import('./pages/Contact/views/Contact'));
const Footer = lazy(() => import('./pages/Footer/views/Footer'));
const MoveToTop = lazy(() => import('./common/components/MoveToTop'));
const SmallSizeNav = lazy(() => import('./common/components/SmallSizeNav'));

const store = createStore(rootReducer);
function App() {
	const [isXsmallSize, setIsXsmallSize] = useState(false);
	useEffect(() => {
		const handleResize = () => {
			setIsXsmallSize(window.innerWidth < 390);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<Provider store={store}>
			<Suspense fallback={<Loading />}>
				{isXsmallSize ? (
					<WarningScreen />
				) : (
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
						<Footer />
					</div>
				)}
			</Suspense>
		</Provider>
	);
}

export default App;
