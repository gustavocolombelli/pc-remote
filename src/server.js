const nodeCmd = require('node-cmd');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();


app.use(express.static('../public'));

app.use(bodyParser.json());


app.get('/bloquear-tela', (req,res, next)=>{
	nodeCmd.get('rundll32.exe user32.dll, LockWorkStation', (err, data, stderr) => console.log(data));
	res.send({status: 'ok'});
});

app.get('/spotify', (req,res, next)=>{
	nodeCmd.get('"C:\\Users\\Gustavo Colombelli\\AppData\\Roaming\\Spotify\\Spotify.exe"', (err, data, stderr) => console.log(data));
	res.send({status: 'ok'});
});

app.listen(80, '10.35.12.143',() =>{
	console.log(`Server executando na porta 80`)
})