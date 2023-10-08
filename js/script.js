function tempConvert() {
  // Menuliskan variabel yang diperlukan
  let celcius = document.getElementById("celcius").value;
  let result = document.getElementById("farenheitResult");
  let explanation = document.getElementById("explainResult");

  // Melakukan perhitungan
  let convert = `${(celcius * 9) / 5 + 32}`;
  // Memasukan nilai hasil hitungan ke result
  result.innerHTML = `${convert} °F`;
  // Menuliskan penjelasan perhitungan yang terjadi kepada user
  explanation.innerHTML = `${celcius || 0}°C * (9 / 5) + 32 = ${convert} °F`;
}

function tempReset() {
  document.getElementById("celcius").value = "";
  document.getElementById("farenheitResult").innerHTML = "0 °F";
  document.getElementById("explainResult").innerHTML = "";
}

document.getElementById("convertButton").onclick = tempConvert;
document.getElementById("resetButton").onclick = tempReset;
