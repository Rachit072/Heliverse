import React from "react"
import { render } from 'react-dom';
import Body from "./components/body"
import '../index.css';

function App(){
    return <>
        <Body/>
    </>
}


const rootElement = document.getElementById('root');
render(<App />, rootElement);