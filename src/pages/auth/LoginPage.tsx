
import { FormLogin } from "../../components/layout/FormLogin"
import { useNavigate } from 'react-router-dom';
import { Credentials, loginUser } from "../../services/api"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate()

    const handleLogin = async ( { email, password }: Credentials) => {

        if(email == '' || password == '') {
          toast.error('Preencha todos os campos!')
          return
        }

        try {
            let loginData = await loginUser({email, password})
            if(loginData && loginData.tokens.access) {
                navigate('/dashboard')

                setTimeout(() => {
                  localStorage.removeItem('accessToken')
                }, 3600000)
            }
        } catch(e: any) {
            if(e.response) {
              let responseData = e.response.data
              toast.error(responseData.detail);
            } else {
              toast.error('Erro ao fazer login')
            }
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

