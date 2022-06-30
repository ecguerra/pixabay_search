import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import App from './App';
import ImageGallery from './routes/ImageGallery';
import Image from './routes/Image';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='images' element={<ImageGallery />}>
              <Route path=':imageId' element={<Image />} />
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
