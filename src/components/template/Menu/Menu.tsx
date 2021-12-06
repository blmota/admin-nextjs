import { Icon } from "../../icons";
import Logo from "../Logo";
import Item from "./Item";


export default function Menu() {
    return (
        <aside className={`flex flex-col
            dark:bg-gray-900 dark:text-gray-200
            bg-gray-100 text-gray-700
        `}>
            <div className={`
                flex flex-col items-center
                justify-center
                h-20 w-20
                bg-gradient-to-r
                from-indigo-500 to-purple-800
            `}>
                <Logo/>
            </div>
            <ul className="flex-grow">
                <Item url="/" text="Home" icon={Icon().home}/>
                <Item url="/settings" text="Settings" icon={Icon().adjustments}/>
                <Item url="/notifications" text="Notifications" icon={Icon().bell}/>
            </ul>

            <ul>
                <Item 
                onClick={() => console.log('logout')}
                className={`text-red-600 
                hover:bg-red-400 hover:text-white
                dark:hover:text-gray-700`}
                text="Sair" 
                icon={Icon().logout}/>
            </ul>
        </aside>
    )
}