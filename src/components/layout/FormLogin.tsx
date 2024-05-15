import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { Credentials} from "../../services/api";
import { useState, useSyncExternalStore } from "react";

 
interface LoginFormProps {
    onLogin: ( credential: Credentials) => void
}

export const FormLogin: React.FC<LoginFormProps> = ({ onLogin } ) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isRunningOnBrowser = useSyncExternalStore(
        () => () => {},
        () => true,
        () => false
    )


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onLogin({email, password})
    }

    return (    
            <form onSubmit={handleSubmit} className="bg-white px-8 py-12 rounded-3xl shadow-2xl font-sans">
                <div>
                    <div className="my-10 flex justify-center pb-3">
                        <img src="/images/b2bit.png" alt="b2bit-logo" width={330} />
                    </div>

                    <div>
                        <label className="text-black font-semibold">E-mail</label>
                        <Input disabled={!isRunningOnBrowser} name="email" type="email" placeholder="@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>

                    <div className="pt-5 pb-3">
                        <label className="text-black font-semibold">Password</label>
                        <Input disabled={!isRunningOnBrowser} name="password" type="password" placeholder={"*".repeat(16)} onChange={(e)=> setPassword(e.target.value)} value={password}/>
                    </div>

                    <div className="pt-5 flex justify-center">
                        <Button disabled={!isRunningOnBrowser} type="submit">Sign In</Button>
                    </div>
                </div>
            </form>
    )
}

