const express = require("express");
const mainRoute = require('./Routes/route');


const app = express();

const PORT = process.env.PORT || 4040;

app.set('view engine', 'ejs');
app.set('views')

app.use(mainRoute);
app.use(express.static('Public'))

app.listen(PORT, () => {
    console.log(`Your website is live on http://localhost:${PORT}`);
});