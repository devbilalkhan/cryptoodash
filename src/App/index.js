import './App.css';
import AppLayout from './AppLayout'
import AppBar from './AppBar'
function App() {
  return (
    <div className="App">
		<AppLayout>
			<AppBar/>
		  <h1>Welcome to Cryptodash</h1>
		</AppLayout>

    </div>
  );
}

export default App;
