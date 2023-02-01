const Modal = props => {
//TODO: destructure this object instead
  return (
    <dialog className={props.className} open={props.open}>
      <article className="listModal">
        <a href="#close" className="close" aria-label="close" onClick={props.onClick}> </a>

        <div className="textInModal">{props.text}</div>
      </article>
    </dialog>
  )
}

export default Modal
