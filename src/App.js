import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [data, setData] = useState([]);
    const [number, setNum] = useState(0);

    const showNumbers = (num) => {
        let arr = [];
        for (let i = 1; i <= num; i++) {
            arr.push(i);
        }
        return arr;
    };

    const showData = () => {
        setData(showNumbers(number));
    };

    useEffect(() => {
        showData();
    }, []);

    return (
        <div className='App'>
            <header className='App-header'>
                <input
                    type='text'
                    placeholder='Ingrese un numero'
                    onChange={(e) => setNum(e.target.value)}
                />

                <button onClick={showData}>Click</button>

                {data && data.map((e) => <p>Numero: {e}</p>)}

                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
