import Button from "./Button";
import countries from "./countries";

function clickHandler (e) {
  const countryFlag = e.target.parentElement.previousElementSibling.querySelector(".country-flag").textContent;
  const countryCode = e.target.parentElement.previousElementSibling.querySelector(".country-code").textContent;
  alert(countryFlag + " " + countryCode);
}

function Country (props) {
  return (
		<div className="country">
			<div className="country-info flex justify-space-evenly">
				<span className="country-flag">{props.countryFlag}</span>
				<span className="country-code">{props.countryCode}</span>
			</div>
			<Button name={props.name} countryCode={props.code} countryFlag={props.emoji} />
		</div>
  );
}

function Countries () {
  const countriesArr = countries.map((country) => <Country name={country.name} countryCode={country.code} countryFlag={country.emoji} key={country.code} />);
  return (
    <div className="countries-cards flex justify-space-evenly" onClick={clickHandler}>
      {countriesArr}
    </div>
  )
}

export default Countries;