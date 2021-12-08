import useAppData from '../../data/hook/useAppData'
import AvatarUser from './AvatarUser'
import BtnChangeTheme from './BtnChangeTheme'
import Title from './Title'

interface HeaderProps {
    title: string,
    subtitle: string
}

export default function Header(props: HeaderProps) {
    const {theme, changeTheme} = useAppData()

    return (
        <div className={`flex`}>
            <Title title={props.title} subtitle={props.subtitle}/>
            <div className={`flex flex-grow items-center justify-end`}>
                <BtnChangeTheme theme={theme} changeTheme={changeTheme}/>
                <AvatarUser className="ml-4" />
            </div>
        </div>
    )
}