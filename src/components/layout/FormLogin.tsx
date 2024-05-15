import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { Credentials} from "../../services/api";
import { useState } from "react";

 
interface LoginFormProps {
    onLogin: ( (credential: Credentials) => void)
}

export const FormLogin: React.FC<LoginFormProps> = ({ onLogin } ) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onLogin({email, password})
    }

    return (    
            <form onSubmit={handleSubmit} className="bg-white px-10 py-20 rounded-3xl ">
                <div>
                    <div className="my-10 flex justify-center">
                        <img src="/images/b2bit.png" alt="b2bit-logo" width={300} />
                    </div>

                    <div>
                        <label className="text-black">E-mail</label>
                        <Input name="email" type="email" placeholder="@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>

                    <div className="pt-5">
                        <label className="text-black">Password</label>
                        <Input name="password" type="password" placeholder="****" onChange={(e)=> setPassword(e.target.value)} value={password}/>
                    </div>

                    <div className="pt-5 flex justify-center">
                        <Button type="submit">Sign In</Button>
                    </div>
                </div>
            </form>
    )
}

