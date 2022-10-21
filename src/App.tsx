import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Pricing } from './pages/Pricing';
import { Testimonials } from './pages/Testimonials';
import Header from './components/Header/Header';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/testimonials" element={<Testimonials />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
