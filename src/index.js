import React from "react"
import * as ReactDOMClient from 'react-dom/client';
import App from './App'
import './css/style.css'

// В теге с id='app' - будет находиться первый передаваемый параметр в render, принимает только один тег


const root = ReactDOMClient.createRoot(document.getElementById("root"))

root.render(<App/>)