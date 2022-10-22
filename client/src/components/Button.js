import classes from "./Button.module.css"


const Button = (props) => {
    return (
        <button
            type={props.type || "button"}
            className={`${classes.button} ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            <span className={classes.button__text}>{props.text}</span>
            <span className={classes.button__icon}><i className={props.icon} /></span>
        </button>
    )
}

export default Button;