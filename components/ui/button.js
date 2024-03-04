import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  return (
    <div className={classes.btn}>
      <Link href={props.link}>{props.children}</Link>
    </div>
  );
}

export default Button;
