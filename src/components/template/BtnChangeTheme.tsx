import { Icon } from "../icons";

interface BtnChangeThemeProps {
    theme: string,
    changeTheme: () => void
}

export default function BtnChangeTheme(props: BtnChangeThemeProps) {
    return props.theme === 'dark' ? (
        <div onClick={props.changeTheme}
            className={`
            hidden sm:flex items-center
            bg-gradient-to-r from-yellow-300 to-yellow-600
            w-14 lg:w-24 h-8 p-1 rounded-full
            cursor-pointer
        `}>
            <div className={`
                flex items-center justify-center
                bg-white text-yellow-600
                w-6 h-6 rounded-full
            `}>
                {Icon("h-4 w-4").sun}
            </div>
            <div className={`
                hidden lg:flex items-center ml-4
                text-white
            `}>
                <span className="text-sm">Claro</span>
            </div>
        </div>
    ) : (
        <div onClick={props.changeTheme}
            className={`
            hidden sm:flex justify-end items-center
            bg-gradient-to-r from-gray-500 to-gray-900
            w-14 lg:w-24 h-8 p-1 rounded-full
            cursor-pointer
            `}>
            <div className={`
            hidden lg:flex items-center mr-2
            text-gray-300
            `}>
                <span className="text-sm">Escuro</span>
            </div>
            <div className={`
            flex items-center justify-center
            bg-black text-yellow-600
            w-6 h-6 rounded-full
            `}>
                {Icon("h-4 w-4").moon}
            </div>
        </div>
    )
}