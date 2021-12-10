import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { Icon } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Authentication() {
    const { signup, login, loginGoogle } = useAuth()

    const [error, setError] = useState(null)
    const [mode, setMode] = useState<'login' | 'signup'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function showError(msg, time = 5) {
        setError(msg)
        setTimeout(() => setError(null), time * 1000)
    }

    async function submit() {
        try {
            if(mode === 'login') {
                await login(email, password)
            } else {
                await signup(email, password)
            }
        } catch (e) {
            showError(e?.message ?? "Ooop!! Algo deu errado.")
        }
    }

    return (
        <div className={`w-screen h-screen 
        flex items-center justify-center bg-gray-700 p-10`}>
            <div className={`w-1/2 min-w-full 
            md:min-w-0 md:max-w-lg 
            lg:min-w-0 lg:max-w-sm
            h-auto bg-white rounded-lg p-7`}>
                <h1 className={`text-xl font-bold mb-6`}>
                    {mode === 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se agora'}
                    </h1>

                {error ? (
                    <div className={`flex items-center
                        bg-red-400 text-white
                        py-3 px-5 my-2
                        border border-red-700 rounded-lg
                        animate-bounce
                    `}>
                        {Icon().warning}
                        <span className={`ml-2`}>{error}</span>
                    </div>
                ) : false}

                <AuthInput 
                    label="Email"
                    type="email"
                    value={email}
                    placeholder="digite seu melhor e-mail"
                    required
                    valueChange={setEmail}
                />

                <AuthInput 
                    label="Senha"
                    type="password"
                    value={password}
                    placeholder="********"
                    required
                    valueChange={setPassword}
                />

                <button onClick={submit}
                    className={`
                        w-full bg-indigo-500 hover:bg-indigo-400
                        text-white rounded-lg px-4 py-3
                    `}
                >
                    {mode === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className={`my-5 border-gray-300 w-full`} />

                <div className={`flex items-center justify-start mb-5`}>
                    <div className={`mr-4`}>
                        <span className={`text-sm font-medium`}>
                            Entrar com:
                        </span>
                    </div>

                    <button onClick={submit}
                        className={` flex items-center justify-center
                            bg-gray-100 hover:bg-gray-300
                            text-white rounded-lg px-4 py-3 mx-1
                        `}
                    >
                        <div className={``}>
                            {Icon().facebook_f}
                        </div>
                        <div className={`hidden text-gray-900`}>
                            Entrar com Facebook
                        </div>
                    </button>

                    <button onClick={loginGoogle}
                        className={` flex items-center justify-center
                            bg-gray-100 hover:bg-gray-300
                            text-white rounded-lg px-4 py-3 mx-1
                        `}
                    >
                        <div className={``}>
                            {Icon().google_g}
                        </div>
                        <div className={`hidden text-gray-900`}>
                            Entrar com Google
                        </div>
                    </button>
                </div>

                {mode === 'login' ? (
                    <p>
                        Novo por aqui?
                        <a onClick={() => setMode('signup')}
                        className={`text-blue-500 hover:text-blue-700 font-semibold 
                        cursor-pointer`}> Crie uma conta gratuitamente
                        </a>
                    </p>
                ) : (
                    <p>
                        Já fas parte da nossa comunidade?
                        <a onClick={() => setMode('login')}
                        className={`text-blue-500 hover:text-blue-700 font-semibold 
                        cursor-pointer`}> Entre com suas credenciais
                        </a>
                    </p>
                )}
            </div>
        </div>
    )
}