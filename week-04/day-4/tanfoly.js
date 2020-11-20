let text = "1ksajd 2hja 3hdkjadkjsad 4hkjsa 5hdsh 6sa 7sa 8hurehkjre 9htr 10rv 11vcxmbvmx 12sdmf 13mds 14fsf 15sd 16fsdf 17fmf 18kew 19kejrewr 20ejrkew 21r  22kew 23lkeskjd 24f 25fwe"
const splittedText = text.split(` `);

const every4thWord = splittedText.map((elem, index) => {
    if ((index + 6) % 4 === 0){
        console.log(index);
        console.log(elem);
        return elem;
    }
  });


const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
