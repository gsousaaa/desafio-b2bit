import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/LoginPage';
import  DashboardPage from './pages/Dashboard/Dashboard';
import NotFound from './pages/notFound/NotFound';
import { PrivateRoute } from './components/auth/PrivateRoute';
import { useState } from 'react'


function App() {

  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('accessToken'))

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login setIsAuth={setIsAuth} />} />
          <Route path='/dashboard' element={
            <PrivateRoute isAuth={isAuth} redirect='/'>
              <DashboardPage />
            </PrivateRoute>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
