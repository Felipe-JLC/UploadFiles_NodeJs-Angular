const express=require('express');//dependencia para levantar un servidor 
const bodyParser=require('body-parser');//dependencia para el parseo de datos
const multipart=require('connect-multiparty');//middleware para el almacenamientos de archivos 
const PORT=3000;

const app=express();
const multiPartMiddleware= multipart( 
   { uploadDir: './files'} //directorio para el almacenamiento de nuestros archivos
);

app.use(bodyParser.json());//devuelve el middlewere que solo analiza el json 
app.use(bodyParser.urlencoded({  //Este objeto contendrá pares clave-valor, donde el valor puede ser una cadena o matriz (cuando extendedes false), o cualquier tipo (cuando extendedes true).
    extended: true
}));

//endPoint to Pload files
app.post('/api/subirfiles', multiPartMiddleware, (req,res)=>{
    res.json({
        "message":"Fichero subido correctamente"
    })
});


app.get('/', (req,res)=>{
    res.send("hola mundo");
});

app.listen(PORT,()=> console.log(`app server running on port: ${PORT}`));
