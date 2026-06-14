const Card = (props) => {
  if (!props.flipped) {
    return (
      // If not flipped, show the front, else, show the back
      <div className="card" onClick={props.onClick}>
        <h1>{props.content.question}</h1>
      </div>
    )
  }

  else {
    return (
      // If not flipped, show the front, else, show the back
      <div className="card flipped" onClick={props.onClick}>
        <h1>{props.content.answer}</h1>
      </div>
    )
  }
}

export default Card;