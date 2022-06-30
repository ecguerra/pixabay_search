import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import App from './App';
import Image from './routes/Image';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='*' element={<App />} />
          <Route path='/images/:imageId' element={<Image />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
