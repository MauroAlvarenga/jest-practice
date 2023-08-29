import logo from "./logo.svg";
import "./App.css";
import FirstTest from "./FirstTest/FirstTest";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Lorem ipsum dolor sit amet</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <main>
                <FirstTest />
            </main>
            <footer>
                <a
                    href="https://github.com/MauroAlvarenga"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Mauro Alvarenga
                </a>
                {' '}- 2023
            </footer>
        </div>
    );
}

export default App;
