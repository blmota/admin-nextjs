import Link from 'next/link'
import useAuth from '../../data/hook/useAuth'

interface AvatarUserProps {
    className?: string
}

export default function AvatarUser(props: AvatarUserProps) {
    const { user } = useAuth()

    return (
        <Link href="/profile">
            <img 
            className={`h-10 w-10 rounded-xl cursor-pointer ${props.className}`}
            src={user?.photoUrl ?? '/images/avatar.png'} 
            alt={user?.name ?? "Avatar padrão"}/>
        </Link>
    )
}