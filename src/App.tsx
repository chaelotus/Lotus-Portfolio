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
import { TbAlertCircleFilled } from 'react-icons/tb';
import { useEffect, useState } from 'react';

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
			<BrowserRouter>
				{isXsmallSize ? (
					<div className="bg-background w-full h-full absolute flex justify-center items-center">
						<div className="flex flex-col items-center">
							<TbAlertCircleFilled className="text-4xl mb-3 text-pointOrange" />
							<span className="font-NanumSquareNeoBold text-pointGray font-bold">
								화면을 390px 이상으로 넓혀주세요.
							</span>
						</div>
					</div>
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
						<DetailModal />
						<Footer />
					</div>
				)}
			</BrowserRouter>
		</Provider>
	);
}

export default App;
