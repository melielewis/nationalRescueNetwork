import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/aboutUs';
import Purpose from './pages/purpose';
import TheProcess from './pages/process';
import Resources from './pages/resources';
import Enter from './pages/logIn';
import SignUp from './pages/signUp';
function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' exact element={<Home />} />
		<Route path='/aboutUs' element={<About/>} />
		<Route path='/purpose' element={<Purpose/>} />
		<Route path='/process' element={<TheProcess/>} />
		<Route path='/resources' element={<Resources/>} />
		<Route path='/logIn' element={<Enter/>} />
		<Route path='/signUp' element={<SignUp/>} />
	</Routes>
	</Router>
);
}

export default App;
