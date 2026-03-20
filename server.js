const express = require('express');
const app = express();

app.use(express.static(__dirname)); // або 'public'

const PORT = process.env.PORT;
app.listen(PORT, '0.0.0.0', () => console.log('Server running on ' + PORT));
