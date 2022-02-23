const formularioGenerador = document.getElementById('formularioGenerador');
const barraCantidadCaracteres = document.getElementById('barraCantidadCaracteres');
const numeroCantidadCaracteres = document.getElementById('numeroCantidadCaracteres');

let cantidadCaracteresUsar = parseInt(prompt("Cuantos caracteres queres que sea tu clave?"));

const arrayClave10 = ["iWxBKLYdmE", "ZQCxCGgcoL", "ChygflJoGs", "kqQRMCIdHC"];
const arrayClave11 = ["QZeGjaBTNEV"];
const arrayClave12 = ["GRKnWATFjylG"];

if(cantidadCaracteresUsar <= 10) {
    //console.log(`Tu clave generada fue: ${arrayClave10}`);
    console.log(`${arrayClave10.join("---")} , alguna de esas te puede servir!`);
} else if (cantidadCaracteresUsar == 11) {
    console.log(`Tu clave generada fue: ${arrayClave11}`);
} else if (cantidadCaracteresUsar == 12) {
    console.log(`Tu clave generada fue: ${arrayClave12}`);
} else {
    console.log("Ingrese una cantidad de caracteres validos");
}

class Clave {
    constructor(clave, caracteres) {
        this.clave = clave;
        this.caracteres = caracteres;
    }
}

const clave1 = new Clave("ZQCxCGgcoL", 10);
const clave2 = new Clave("ChygflJoGs", 10);
const clave3 = new Clave("kqQRMCIdHC", 10);

let claves = [clave1,clave2,clave3];

//console.log(`Si no te gusto ninguna clave que te generamos aca te dejamos otras para que puedas udar: ${claves}`);


console.log(claves);
