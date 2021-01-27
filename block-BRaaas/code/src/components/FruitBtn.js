const fruits = [
  { id: 'apple', value: '🍎 apple' },
  { id: 'orange', value: '🍊 orange' },
  { id: 'grape', value: '🍇 grape' },
  { id: 'pear', value: '🍐 pear' },
];

function clickHandler (e) {
	alert(e.target.textContent)
}

function FruitBtn(props) {
  return (
		<button onClick={clickHandler} className={props.className}>
			{props.btnName}
		</button>
	);
}

function FruitButtons () {
  return fruits.map((fruit, i) => <FruitBtn className="Btn fruitBtn" btnName={fruit.value} key={fruit.id} />)
}

export default FruitButtons;
