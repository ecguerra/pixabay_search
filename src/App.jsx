import { 
  Routes,
  Route,
} from 'react-router-dom'

import ImageGallery from './routes/ImageGallery';
import Image from './routes/Image';
import Search from './components/Search';

function App() {

  return (
    <>
    <Search />
    <Routes>
      <Route path='images' element={<ImageGallery />}>
        <Route path=':imageId' element={<Image />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
