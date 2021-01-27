function clickHandler(messages) {
	for (let message of messages) {
		alert(message);
	}
}

function Button (props) {
  return (
		<button onClick={() => clickHandler(props.messages)} className={props.className}>
			{props.btnName}
		</button>
  );
}

export default Button;