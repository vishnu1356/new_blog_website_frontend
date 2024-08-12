import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
{/* <BrowserRouter /> */}
import  { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration: 1000,
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
        <Toaster />
    </BrowserRouter>
)
