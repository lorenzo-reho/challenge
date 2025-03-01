import './App.css';
import MainPage from './pages/MainPage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<MainPage />}>
        <Route path='/page1' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
      </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;