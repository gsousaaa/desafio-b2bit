import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/LoginPage';
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/notFound/NotFound';
import { PrivateRoute } from './pages/auth/PrivateRoute';



function App() {
  const token = localStorage.getItem('accessToken')
  const isAuth = token ? true : false

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={
            <PrivateRoute isAuth={isAuth} redirect='/'>
              <Dashboard />
            </PrivateRoute>}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
