import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/LoginPage';
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/notFound/NotFound';
import { PrivateRoute } from './pages/auth/PrivateRoute';
import { useState } from 'react';



function App() {

  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('accessToken'))

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login setIsAuth={setIsAuth} />} />
          <Route path='/dashboard' element={
            <PrivateRoute isAuth={isAuth} redirect='/'>
              <Dashboard />
            </PrivateRoute>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
