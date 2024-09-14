import './App.css'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import HeroPage from './Pages/HeroPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<HomePage />} />
        <Route path='/:name' element={<HeroPage />} />
      </>
    ),
    {
      basename: '/overwatch-heroes-react/'
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
