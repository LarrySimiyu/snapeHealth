import React, { useState } from "react";

export default function TemperatureConverter() {
  const [fahrenheitInput, setFarenheitInput] = useState();
  const [celciusInput, setCelciusInput] = useState();

  const changeCelcius = (event) => {
    let fahrenheit = event.target.value;
    setFarenheitInput(fahrenheit);
    setCelciusInput(((fahrenheit - 32) * 5) / 9);
  };

  const changeFahrenheit = (event) => {
    let celcius = event.target.value;
    setCelciusInput(celcius);
    setFarenheitInput((celcius * 9) / 5 + 32);
  };

  console.log(fahrenheitInput);
  console.log(celciusInput);

  return (
    <div>
      <input onChange={changeCelcius} value={fahrenheitInput} />

      <input onChange={changeFahrenheit} value={celciusInput} />
    </div>
  );
}
