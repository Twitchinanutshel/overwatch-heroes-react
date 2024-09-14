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
        <Route index element={<HomePage />} />
        <Route path='/:name' element={<HeroPage />} />
      </>
    )
  )

  return <RouterProvider router={router} />;
}

export default App
