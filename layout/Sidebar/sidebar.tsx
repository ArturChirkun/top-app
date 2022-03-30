
import { SidebarProps } from "./sidebar.props";
import styles from "./sidebar.module.css";
import cn from "classnames";
import { Menu } from "../Menu/menu";
import Logo from '../logo.svg';
import { Search } from "../../components/Search/Search";

export const SideBar = ({className, ...props} : SidebarProps): JSX.Element => {
    return (
        <div {...props} className={cn(className, styles.sidebar)}>
            <Logo className={styles.logo}/>
            <Search />
            <Menu />
        </div>
    );
};