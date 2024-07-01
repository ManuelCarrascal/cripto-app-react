import { useEffect } from 'react';
import Hero from './components/Hero';
import NavbarTop from './components/NavbarTop';
import { useCryptoStore } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
	const fetchCryptos = useCryptoStore((state) => state.fetchCryptos);

	useEffect(() => {
		fetchCryptos();
	});

	return (
		<>
			<div className="flex flex-col h-full">
				<NavbarTop />
				<Hero />
			</div>
			<ToastContainer />
		</>
	);
}

export default App;
