var express = require('express');
var port = process.env.PORT || 8888;
var app = express();


app.use(express.static('./public'));




// PORT BEING USED IS 8888
app.listen(port, function(){
    console.log('listening on', port);
});
