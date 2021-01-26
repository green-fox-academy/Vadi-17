import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
// az app.js-hez képest szeretnénk viszonyítani. Az az alapkönyvtár ahonnét futtatom
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use('/static', express.static(path.resolve(__dirname + '/public')));
// app.set('views', `${ __dirname }/views`);




// A szerver működik és hallgatózik a 3000-s porton :-)
app.listen(port, () => {
    console.log(`Server${port}`);
});