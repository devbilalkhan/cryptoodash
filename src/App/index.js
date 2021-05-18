import './App.css';
import AppLayout from './AppLayout'
import AppBar from './AppBar'
import AppProvider from './AppProvider';
function App() {
	return (
		<div className="App">
			<AppLayout>
				<AppProvider>
					<AppBar />
					<h1>Welcome to Cryptodash</h1>
				</AppProvider>
			</AppLayout>

		</div>
	);
}

export default App;
