const express = require("express");
const bodyParser = require('body-parser');
const app = express();

//parser application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//panggil routes
var routes routes(app: any): void
routes(app);

app.listen(1234, () => {
    console.log('Server started on port');
});