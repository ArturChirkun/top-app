
import { HeaderProps } from "./header.props";
import styles from "./header.module.css";
import cn from "classnames";
import Logo from '../logo.svg';
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import { motion } from "framer-motion";
import { SideBar } from "../Sidebar/sidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Header = ({className, ...props} : HeaderProps): JSX.Element => {

    const [isOpened, setIsOpened] = useState<boolean>(false);

    const router = useRouter();


    useEffect(() =>{
        setIsOpened(false)
    }, [router]);
    
    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffnes: 20
            }
        },
        closed: {
            opacity: 0,
            x: '100%'
        }
    };

    return (
        <header className={cn(className, styles.header)} {...props}>
            <Logo />
            <ButtonIcon appearence="white" icon="menu" onClick={() => setIsOpened(true)}/>
            <motion.div
            initial='closed' 
            animate={isOpened ? 'opened' : 'closed'}
            variants={variants}
            className={styles.mobileMenu}>
                <SideBar />
                <ButtonIcon className={styles.menuClose} appearence="white" icon="close" onClick={() => setIsOpened(false)}/>
            </motion.div>
        </header>
    );
};