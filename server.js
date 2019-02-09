const express = require('express');
const path = requre('path');
const htmlRoute = require(path.join(__dirname, 'app/routing/htmlRoutes.js'))
const app = express();
const PORT = 5150;






app.listen(PORT, function(){

});
