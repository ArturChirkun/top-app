import { Tag } from "./tag.props";
import styles from "./tag.module.css";
import cn from "classnames";

export const TagDiv = ({
  children,
  size = "m",
  color = 'ghost',
  className,
  href,
  ...props
}: Tag): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size == "s",
        [styles.m]: size == "m",
        [styles.ghost]: color == "ghost",
        [styles.red]: color == "red",
        [styles.gray]: color == "gray",
        [styles.green]: color == "green",
        [styles.primary]: color == "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <> {children} </>}
    </div>
  );
};
