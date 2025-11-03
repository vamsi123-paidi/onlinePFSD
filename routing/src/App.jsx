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
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/user/:id' element={<ProfilePage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='profile' element={<Profile/>}/> 
            <Route path='settings' element={<Settings/>}/> 
          </Route>
          <Route path='*' element={<PageNotFound/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App