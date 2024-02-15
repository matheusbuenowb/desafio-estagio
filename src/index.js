import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import Home from './Home';
//import LoginPage from './LoginPage';
//import CharacterDetailsPage from './pages/CharacterDetailsPage';
//import CharacterPage from './pages/CharacterPage';
//import MissionDetailsPage from './pages/MissionDetailsPage';
//import MissionPage from './pages/MissionsPage';
//import Home from './Home';
//import CharacterDetails from './components/CharacterDetails';
//import CharacterList from './components/CharacterList';
//import MissionDetails from './components/MissionDetails';
//import MissionList from './components/MissionList';
//import Navbar from './components/Navbar';

//Definição das rotas das páginas principais (Home, login, etc)

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },/*

  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: "/MissionDetailsPage",
    element: <MissionDetailsPage/>
  },
  {
    path: "/MissionPage",
    element: <MissionPage/>
  },
  {
    path: "/CharacterDetailsPage",
    element: <CharacterDetailsPage/>
  },
  {
    path: "/CharacterPage",
    element: <CharacterPage/>
  },
//Compoents
  {
    path: "/MissionList",
    element: <MissionList/>
  },
  {
    path: "/MissionDetails",
    element: <MissionDetails/>
  },
  {
    path: "/CharacterList",
    element: <CharacterList/>
  },
  {
    path: "/CharacterDetails",
    element: <CharacterDetails/>
  },
   {
    path:"/Navbar",
    element: <Navbar/>
   }

])
*/

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
