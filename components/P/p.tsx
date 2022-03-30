
import { PProps } from "./p.props";
import styles from "./p.module.css";
import cn from "classnames";

export const P = ({children, size = 'm', className, ...props} : PProps): JSX.Element => {
    return (
        <p className={cn(styles.button, className,{
            [styles.s]: size == "s",
            [styles.m]: size == "m",
            [styles.l]: size == 'l'
          })}
          {...props}>
            {children}
        </p>
    );
};