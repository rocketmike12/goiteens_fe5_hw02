import "./App.css";
import Greeting from "./components/Greeting.jsx";
import Message from "./components/Message.jsx";
import Button from "./components/Button.jsx";

function App() {
	return (
		<>
			<Greeting name="Іван" />
			<Message text="hello world" />
			<Message text="test message" />
			<Button onClick={() => {console.log("the button was clicked!")}} />
		</>
	);
}

export default App;
