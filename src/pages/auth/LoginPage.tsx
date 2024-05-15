
import { FormLogin } from "../../components/layout/FormLogin"
import { useNavigate } from 'react-router-dom';
import { Credentials, loginUser } from "../../services/api"


const Login = () => {
    const navigate = useNavigate()

    const handleLogin = async ({ email, password }: Credentials) => {
        try {
            await loginUser({email, password})
            navigate('/dashboard')

        } catch(e) {
          console.log('Erro ao fazer login')
        }
    }
 
    return (
        <>
          <div className="flex w-full h-screen" >
            <div className="bg-gray-100 w-full flex items-center justify-center">
              <FormLogin onLogin={handleLogin}/>
            </div>
          </div>
        </>
      )
}


export default Login

