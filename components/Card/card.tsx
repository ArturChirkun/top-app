
import { CardProps } from "./card.props";
import styles from "./card.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

export const Card = forwardRef(({color = 'white', children,className, ...props} : CardProps , ref:ForwardedRef<HTMLDivElement>): JSX.Element => {
    return (
        <div className={cn(styles.card, className, {
            [styles.blue]: color == 'blue'
        })} ref={ref}
        {...props}>
            {children}
        </div>
    );
});