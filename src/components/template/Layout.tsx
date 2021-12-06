import useAppData from "../../data/hook/useAppData";
import Content from "./Content";
import Header from "./Header";
import Menu from "./Menu/Menu";

interface LayoutProps {
    title: string,
    subtitle: string,
    children: any
}

export default function Layout(props: LayoutProps) {
    const { theme } = useAppData()

    return (
        <div className={`${theme} flex h-screen w-screen`}>
            <Menu />
            <div className={`flex flex-col 
                w-full p-7
                bg-gray-200 dark:bg-gray-800
            `}>
                <Header title={props.title} subtitle={props.subtitle}/>
                <Content>
                    {props.children}
                </Content>
            </div>
        </div>
    );
}