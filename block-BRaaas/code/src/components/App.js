import Button from './Buttons';
import FruitBtns from './FruitBtn';

function App () {
  return (
		<>
			<Button className="alertBtn" btnName="Click Me" messages={[`Hello React Event`]} />
      <Button className="alertBtn" btnName="How can I help you?`" messages={[
        `To learn React use https://reactjs.org`,
        `React and ReactDOM works together`,
        `Babel helps in writing JSX`]}
      />
      <Button className="alertBtn" btnName="Arya" messages={[`Hello Arya`]} />
      <Button className="alertBtn" btnName="John" messages={[`Hello John`]} />
      <Button className="alertBtn" btnName="Bran" messages={[`Hello Bran`]} />
      <FruitBtns />
		</>
  );
}

export default App;