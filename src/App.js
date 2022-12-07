import { useState } from "react";
import FacebookLogin from "react-facebook-login";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [info, setInfo] = useState({});
	const responseFacebook = (response) => {
		setInfo(response);
		setIsLoggedIn(true);
	};
	return isLoggedIn ? (
		<div className="App">
			<Header info={info}></Header>
			<MainContent info={info}></MainContent>
		</div>
	) : (
		<>
			<FacebookLogin
				appId="652438406596284"
				autoLoad={true}
				fields="name,email,picture"
				callback={responseFacebook}
			></FacebookLogin>
		</>
	);
}
export default App;
