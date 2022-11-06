const Modal = props => {
  return (
    <dialog className="modalContainer" open={props.open}>
      <article>
        <a href="#close" aria-label="close" className="close" onClick={props.onClick}> </a>

        <div className="textInModal">{props.text}</div>
      </article>
    </dialog>
  )
}

export default Modal
