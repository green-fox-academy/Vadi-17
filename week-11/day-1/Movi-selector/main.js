const genreSelector = document.getElementById('genre');
console.dir(genreSelector);
console.log(genreSelector);

genreSelector.addEventListener('change', (event) => {
  const resultText = document.querySelector('.result');
  console.dir(resultText);
  resultText.textContent = `The selected movie is: ${event.target.value}`;
})


function addFunction() {
    const genreSelector = document.getElementById('genre');
    var option = document.createElement("option");
    option.text = "új kategória";
    genreSelector.add(option);
  }

