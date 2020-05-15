const express = require('express');



const app = express();
//const port = 3000;
const port = process.env.PORT;

app.get('/',(req,res)=>{
    res.send({
        error : 'No url found for requested api made changes',
    });
});

app.get('/help',(req,res)=>{
    res.send({
        helperName : 'Pramod',
        helperAge : '33',
    });
});

app.listen(port,()=>{
    console.log('Listening on port 3000');
})