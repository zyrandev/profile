import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ResponsiveProvider} from "./responsive/ResponsiveProvider.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ResponsiveProvider children={<App/>}/>
    </React.StrictMode>,
)
