import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/main/HomePage/HomePage';
import Page404 from './pages/main/page_404/Page404';
import GalleryPage from './pages/galleryPage/GalleryPage';
import StudyPage from './pages/studyPage/StudyPage';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/study" element={<StudyPage />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
