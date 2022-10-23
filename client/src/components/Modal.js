const Modal = (props) => {

    return (
        <dialog open={props.open}>
                <article>
                    <header>
                        <a href="#close"
                            aria-label="Close"
                            className="close"
                            onClick={props.onClick}
                            ></a>
                    </header>
                <div className="textInModal">
                    {props.text}
                </div>
                </article>
            </dialog>
)
}

export default Modal