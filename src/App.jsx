import { 
  Routes,
  Route, 
  Link
} from 'react-router-dom'

import ImageGallery from './routes/ImageGallery';
import Image from './routes/Image';

function App() {
  return (
    <>
    <Link to='/images'>Go to the images!</Link>
    <Routes>
      <Route path='images' element={<ImageGallery />} />
      <Route path='images/:imageId' element={<Image />} />
    </Routes>
    </>
  );
}

export default App;
