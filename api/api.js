let express = require('express');
let app = express();

app.get('/', (req, res) => {
    var message = 'hello there!';

    console.log(message);
    res.send(message);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});