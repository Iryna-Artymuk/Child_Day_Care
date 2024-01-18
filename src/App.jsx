import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/main/HomePage/HomePage';
import Page404 from './pages/main/page_404/Page404';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
