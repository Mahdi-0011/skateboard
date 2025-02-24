import ListSection from "./components/ListSection/ListSection";
import "./App.scss";
import Counter from "./components/Counter/Counter";

function App() {
	const animals = ["gorilla", "horse", "pig", "giraff", "chicken", "elephant"];
	const peoples = ["Karen", "Bobby", "Nisse", "Stina"];
	const fruits = ["apple", "orange"];

	return (
		<>
			<h1>🛹 skateboard</h1>
			<p>a demo for students of React</p>
			<Counter />
			<ListSection items={animals} />
			<ListSection items={peoples} />
			<ListSection items={fruits} />
			<button>Hello?</button>
		</>
	);
}

export default App;
