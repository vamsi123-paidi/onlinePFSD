import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NavbarComp from './components/NavbarComp'
import Login from './pages/Login';
import ProfilePage from './pages/ProfilePage';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import PageNotFound from './pages/PageNotFound';
import Fetch from './pages/Fetch';
const App = () => {
  return (
    <>
     <Fetch/>
    </>
  )
}

export default App