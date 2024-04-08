import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
<ContextProvider children={undefined}>
   <App />
</ContextProvider>,
document.getElementById('root'));

// reportWebVitals();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//       <App />
//    </React.StrictMode>
// );

// reportWebVitals();