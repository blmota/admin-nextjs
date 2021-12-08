import Image from 'next/image'
import Router from 'next/router'
import load from '../../../public/images/load.gif'
import useAuth from '../../data/hook/useAuth'

export default function Protect(props) {
    const { user, isLoading } = useAuth()

    function renderContent() {
        return (
            <>
                {props.children}
            </>
        )
    }

    function renderLoad() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={load} alt="Aguarde! Carregando o conteúdo..." />
            </div>
        )
    }

    if(!isLoading && user?.email) {
        return renderContent()
    } else if(isLoading) {
        return renderLoad()
    } else {
        Router.push('/authentication')
        return null
    }
}