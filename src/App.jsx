import './App.css'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from './pages/Home';
import SignInPage from './pages/SignIn';
import NavBar from './components/NavBar';
import SignUpPage from './pages/SignUp';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index  element={<Home />} />
        <Route index path="/signin" element={<SignInPage />} />
        <Route index path="/signup" element={<SignUpPage />} />
      </Route>
    )
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <div className=''>
      <NavBar  />
      <div >
        <Outlet />
      </div>
    </div>
  );
};