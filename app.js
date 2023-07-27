// let num = Math.floor(Math.random() * (10 - 1)) + 1;
// console.log(num);

// let numUser = parseInt(prompt("Adivine el numero de 1 a 10"));
// let vidas = 3;

// while (num !== numUser && vidas > 1) {
//     let message = (num > numUser) ? "Si es mayor" : "El numero es menor";

//     console.log("Te equivocate " + message );
//     numUser = parseInt(prompt("Numero de 1 a 10"));
//     vidas--;
// }

// if (num === numUser) {
//     console.log("Ganaste 😁");
// } else {
//     console.log("Perdiste 😒");
// }
//----------------------------------ARRAY---------------------------------------------------------
/*
let frutas = ["Platano", "Sandia", "Banano", "Manzana"];

console.log(frutas);

console.log(frutas[3]);

let res = frutas.push("melon");
console.log(frutas);

let rest = frutas.push("Piña");
console.log(frutas);


for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


frutas.forEach(item => {
    console.log(item);
});

//Para mostrar indice del foreach y en que posicion esta
frutas.forEach((item, index, arr) => {
  console.log(`${index} = ${item} = ${arr}`);
});
*/

//--------------------------------FUNCIONES------------------------------------------------------

// function hello() {
//     console.log("HOla");
// }

// hello();

// function hola(message) {
//     return "Bienvenido " + message;
// }

// console.log(hola("Mattyu"));

// const sumar = function (n1, n2) {
//     return n1 + n2;
// };

// let rest = sumar(45, 5);
// console.log(rest);

/*ARRARY CON EL CARRITO DE COMPRA */
// const frutas = [ ];

// const pedido = prompt("Que frutas deseas comprar");

// frutas.push(pedido);

// while(confirm("Desea agregar otro producto en el carritos  de compra")) {
//     const pregunta = prompt("Que frutas deseas comprar");
//     frutas.push(pregunta);
// }

// console.log("Los productos que compraste");
// for (const item of frutas) {
//         console.log(item);
// }

/*PRIMER PASO */
// const input = document.querySelector("#input");
// const bnt = document.querySelector("#btn");

// bnt.addEventListener("click", () => {
//     let inpt = input.value;
//    document.querySelector('#mostrar').innerHTML = inpt;
//     console.log(inpt);
// });

/*SEGUNDO PASO */
/*
function presionar() {
    let input2 = document.querySelector("#input").value;
    document.querySelector('#mostrar').innerHTML = input2;
    console.log(input2);

}*/

//funcion declarativa
// function numAleatoria(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// console.log(numAleatoria(1, 5));

// const miretor = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// console.log(miretor(1, 5));

/*----------------------------OBJETO EN JS--------------------------------------------- */
// const obj = {
//     nombre: 'Mateo',
//     apellidos: 'Carmelo Mendoza',
//     edad: 25,
//     genero: 'M',
//     enemigo: ["Perrro", "Gatos"]
// };
// console.log(obj.nombre);
// //Add
// obj.carro = 'Hilux';
// console.log(obj);
// console.log(obj.carro);

// //Update
// obj.nombre = 'Marcos';
// console.log(obj.nombre);

// //Delete
// delete obj.carro;
// console.log(obj);

// // para ver si existe esa propiedad
// console.log(obj.hasOwnProperty("carro"))

/*-----------------------objetos anidados---------------------- */
// const obj2 = {
//     nombre: 'Mateo',
//     apellidos: 'Carmelo Mendoza',
//     edad: 25,
//     genero: 'M',
//     enemigo: ["Perrro", "Gatos"],
//     otros: {
//         amigos: ["Pedro", "Juan", "Diego", " Bocina"],
//         favoritos: {
//             aguaPura: "mineral",
//             comida: {
//                 fria: "Salmon",
//                 caliente: "Pollo"
//             }
//         }
//     },

//     comer(editor) {
//         console.log("Mateo esta programando en Javascript y esta usando " + editor);
//         return `${this.nombre} usa el editor ${editor}`;
//     },

//     verEnemigo() {
//         this.enemigo.forEach((item) => console.log(item));
//     }
// };

// //con el metodo
// obj2.comer("VS Code");
// //con return
// console.log(obj2.comer("VS Code"));
// obj2.verEnemigo();

// console.log(obj2.otros.favoritos.comida.fria);
// console.log(obj2.otros.amigos[3]);
// console.log(obj2.otros.amigos.length);

// for (const item in obj2) {
//    console.log(obj2[item]);
// }

//  console.log(Object.values(obj2));
//  console.log(Object.keys(obj2));
//  console.log(Object.getOwnPropertyNames(obj2));
//  console.log("-------------------------------------");
//  Object.values(obj2).forEach((item) => console.log(item));

/*---------------------------DESTRUCTURING OBJECTS-----------------------------------*/
// const listObj = {
//     // nombre: 'Mateo',
//     nombre: 'Mateo',
//     apellidos: 'Carmelo Mendoza',
//     genero: 'M',
//     edad: 25,
//     enemigo: ["Perrro", "Gatos"],
//     get nombreMayuscula() {
//         return this.nombre.toUpperCase();
//     },
//     set newEnemigo(nombre) {
//         this.enemigo.push(nombre);
//     }
// }

// const nombreList = listObj.nombre;

// //con alias
// const {
//     //en caso de que no tiene nombre en el obect
//     nombre: n = "Ana",
//     apellidos: a,
//     genero: g,
//     edad: e
// } = listObj;

// console.log(
//     n,
//     a,
//     g,
//     e
// );

// // GET
// console.log(listObj.nombreMayuscula);

// // SET
// listObj.newEnemigo = "Insectos";
// console.log(listObj.enemigo);

// const b = {
//     nombre: "hola",
// };

// const c = b;

// b.nombre = "chao";

// console.log(c);

/*--------------------------------------DOM--------------------------------------------------- */
// const p = document.querySelector(".mi"),
//     btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//     p.innerHTML = "Mi nuevo texto";
//     p.style.color = "blue"
// })
//--------------------------------------------------------------------

// const input = document.querySelector("#color"),
//     button = document.querySelector("#boton"),
//     text = document.querySelector("#textoHexa"),
//     card = document.querySelector("#cardColor");

//     button.addEventListener("click", () => {
//         text.textContent = input.value;
//         card.style.backgroundColor = input.value;
//         navigator.clipboard
//         .writeText(input.value)
//         .then(() => console.log("texto copiado"))
//         .catch((e) => console.log(e));
//     })

//--------------------------------------------------------------------

// const ul = document.querySelector("#mostrar");
// const paises = ["Guatemala", "Mexico", "Canada", "EE.UU", "Bolivia"];

// paises.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = item;
//     ul.appendChild(li);
// });

// //--------------------------------------------------------------------
// const listaDinamica = document.querySelector(".list-inline");

// const arrayElementos = ["Guatemala", "Mexico", "Canada", "EE.UU", "Bolivia"];

// const fragment = document.createDocumentFragment();

// arrayElementos.forEach((pais) => {
//     const li = document.createElement("li");
//     li.className = "list";

//     const bold = document.createElement("b");
//     bold.textContent = "País: ";

//     const span = document.createElement("span");
//     span.className = "text-primary";
//     span.textContent = pais;

//     li.appendChild(bold);
//     li.appendChild(span);
//     fragment.appendChild(li);
// });

// listaDinamica.appendChild(fragment);

// let template = "";

// arrayElementos.forEach((pais) => {
//     template += `
//     <li class="list">
//         <b>País: </b> <span class="text-primary">${pais}</span>
//     </li>
//     `;
// });

// listaDinamica.innerHTML = template;

/*..................Carrito de compra No.1.............*/
/*
const ul = document.querySelector("#carrito"),
    template = document.querySelector("#template"),
    btns = document.querySelectorAll(".card .btn");
const fragment = document.createDocumentFragment();
const carritoObjet = {};

const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta);
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    }
    if (carritoObjet.hasOwnProperty(producto.titulo)) {
        producto.cantidad = carritoObjet[producto.titulo].cantidad + 1;
    }
    carritoObjet[producto.titulo] = producto
    //aqui llamamos a la funcion de pintarCarrito
    pintarCarrito(producto)
    console.log(carritoObjet);
};


const pintarCarrito = (prod) => {
    // console.log("pintando al carrito", prod);
    //se agregar un textContent vacio para que no se repita el  foreach cuando se agregar en html
    ul.textContent = " "; 
    // se usa el objet cuanto es un objeto  que recibe los listados
    Object.values(carritoObjet).forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".badge").textContent = item.cantidad;
        fragment.appendChild(clone);
    });
    ul.appendChild(fragment);
}
btns.forEach((item) => {
    item.addEventListener("click", agregarAlCarrito);
});
*/


/*-----------------------------------ARRAY DE METODOS---------------------------------- */
/*
//https://bluuweb.github.io/desarrollo-web-bluuweb/11-06-js-paradigma/#map
const frutas = ["🍒", "🍌", "🍇", "🍉"];
console.log(frutas);
// un map siempre pasar el return
const nuevo = frutas.map((item) => item);
frutas.push("🍓");
console.log(nuevo);




const users = [{
        id: 1,
        name: "John",
        age: "38"
    },
    {
        id: 2,
        name: "Pedro",
        age: "20"
    },
    {
        id: 3,
        name: "CamperCat",
        age: "10"
    },
];
//________________MAP
const namen = users.map((item) => item.name);
console.log(namen);

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const numerosPorDos = numero.map((item) => item * 2);
console.log(numerosPorDos);


const products = [
    { id: "1", name: "shirt", category: "clothing" },
    { id: "2", name: "Sports Tennis", category: "accessories" },
    { id: "3", name: "Casual shoes", category: "footwear" },
    { id: "4", name: "skirt", category: "clothing" },
    { id: "5", name: "tie", category: "clothing" }
]
let nameOfProducts = products.map((product, index, array) => {
    // Cómo solo queremos los nombres, retornamos "name".
    return product.name;
})

console.log(nameOfProducts); 


//________________FILTER

const mayor = users.filter((item) => item.age > 30);
console.log(mayor);

let diferente3 = users.filter((item) => item.id != 3);
console.log(diferente3);

//________________FIND  busca un valor vardadero

let amy = users.find((item) => item.id == 2);
console.log(amy)

//________________SOME

let existe = users.some((item) => item.id == 6);
console.log(existe)

//________________FINDINDEX para ver la posicion u orden
const indice = users.findIndex((item) => item.id == 2);
console.log(indice);

//________________----CONCAT

const uno = ["a", "b", "c", "d"];
const dos = ["e", "f", "g", "h"];

const unir = uno.concat(dos);
console.log(unir);

//________________concat con spread

const puntitos = [...uno, ...dos];
console.log(puntitos);

//________________________REDUCE

const num = [1, 2, 3, 4, 5];

let result = num.reduce((acc, valorActual) => acc + valorActual);
console.log(result);


const desorden = [
    [0, 1],
    [2, 3],
    [4, 5],
];
//primera forma
let ordenar = desorden.reduce((acc, current) => acc.concat(current));
console.log(ordenar);

//segunda forma

const arryVacio = [].concat(...desorden);
console.log(arryVacio);


//________________________SPLIT
const fechas = "Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre";
const arreglar = fechas.split(",");
console.log(arreglar);
*/

/*..................Carrito de compra No.2.............*/
/*
const ul = document.querySelector("#carrito"),
    template = document.querySelector("#template"),
    btns = document.querySelectorAll(".card .btn");
const fragment = document.createDocumentFragment();


const carritoObjet = [];

const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta);

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    }

    const confindindex = carritoObjet.findIndex((item) => item.id == producto.id);
    console.log(confindindex);

    if (confindindex == -1) {
        console.log("Agregando primero");
        carritoObjet.push(producto);
    } else {
        carritoObjet[confindindex].cantidad++;
        console.log("Agregando por la segunda vez");
    }
    console.log(carritoObjet);

    //aqui llamamos a la funcion de pintarCarrito
    pintarCarrito(carritoObjet)
};

btns.forEach((item) => {
    item.addEventListener("click", agregarAlCarrito);
});

const pintarCarrito = (prod) => {
    // console.log("pintando al carrito", prod);
    ul.textContent = " ";
    
    // asi se usa el foreach cuando es un array que recibe los listados
    prod.forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".badge").textContent = item.cantidad;

        fragment.appendChild(clone);
    });

    ul.appendChild(fragment);
}*/

/*----------------------------Javascript (DOM #02)---------------------- */
/*
// const cajitas = document.querySelectorAll(".border");

// cajitas.forEach(element => {
//     element.addEventListener("click", (e) => {
//         e.stopPropagation();
//         console.log("Me diste click");
//     });
// });

// const formulario = document.querySelector("form");
// const d = document.querySelector("form .d");

// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();
//     d.innerHTML = `<div class="alert alert-danger" role="alert">
//     Mensaje enviado..!! 😁
//   </div>`

// });

// const contenedor = document.querySelector(".contenedor");
// contenedor.addEventListener("click", (e) => {
    document.addEventListener("click", (e) => {
    console.log(e.target);


    if (e.target.id === "hijo") {
        console.log("Diste click al hijo");
    }

    if (e.target.matches(".border-danger")) {
        console.log("Diste click al nieto");
    }

    if (e.target.dataset["div"] == "divPadre") {
        console.log("Diste click al Padre");
    }
});*/

/*..................Carrito de compra No.3.............*/
// NOTA: QUEDA PENDIENTE DE ELIMINAR EL FOOTER
/*
const ul = document.querySelector("#carrito"),
    template = document.querySelector("#template"),
    footer = document.querySelector("#footer"),
    templateFooter = document.querySelector("#templateFooter"),
    btns = document.querySelectorAll(".card .btn");
const fragment = document.createDocumentFragment();

//DELEGACION DE EVENTOS
document.addEventListener("click", (e) => {
    // console.log(e.target);

    // console.log(e.target.matches(".col .btn"));
    if (e.target.matches(".col .btn")) {
        // console.log("estas ejecutando los botones");
        agregarAlCarrito(e);
    }

    //boton de agregar
    // console.log(e.target.matches(".dosBotones .btn-success"));
    if (e.target.matches(".dosBotones .btn-success")) {
        //aqui llamamos la funcion de agregar dentro de nuestra delegacion
        agregarElBoton(e);
    }


    //boton de eliminar
    // console.log(e.target.matches(".dosBotones .btn-danger"));
    if (e.target.matches(".dosBotones .btn-danger")) {
        eliminarElBoton(e);
    }

});

//Aqui cambiamos el cost a let para poder usarlo con los dos botones
// const carritoObjet = []; 
// aqui agregando los listados
let carritoObjet = [];

const agregarAlCarrito = (e) => {
    // console.log(e.target.dataset.fruta);

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio)
    }

    // console.log(producto);
    const confindindex = carritoObjet.findIndex((item) => item.id == producto.id);
    // console.log(confindindex);

    if (confindindex == -1) {
        // console.log("Agregando primero");
        carritoObjet.push(producto);
    } else {
        carritoObjet[confindindex].cantidad++;
        // console.log("Agregando por la segunda vez");

        // aqui se multiplica la cantidad del producto con el precio que tiene para ir aumentando
        //se le agrega la multiplicacion en el foreach de item.precio * item.cantidad        
        //carritoObjet[confindindex].precio = carritoObjet[confindindex].cantidad * producto.precio;
    }
    //    console.log(carritoObjet);

    //aqui llamamos a la funcion de pintarCarrito
    pintarCarrito();
};

// btns.forEach((item) => {
//     item.addEventListener("click", agregarAlCarrito);
// });

const pintarCarrito = () => {
    // console.log("pintando al carrito", prod);
    ul.textContent = " ";

    // asi se usa el foreach cuando es un array que recibe los listados
    carritoObjet.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".badge").textContent = item.cantidad;
        clone.querySelector(".total .lead span").textContent = item.precio * item.cantidad;

        clone.querySelector(".btn-success").dataset.titulo = item.titulo;
        clone.querySelector(".btn-danger").dataset.titulo = item.titulo;
        // el dataset ahora esta en modo dinamicos

        //este fragment se usa cuando se recorre un ciclo como el foreach
        fragment.appendChild(clone);
    });
    ul.appendChild(fragment);

    //aqui llamamos a la funcion de pintarFooter
    pintarFooter();
};

const pintarFooter = function () {
    footer.textContent = " ";

    // aqui ocurre un error cuando se agrega las llaves
    const total = carritoObjet.reduce((acc, current) => acc + current.precio * current.cantidad, 0);
    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector(".card span").textContent = total;
    footer.appendChild(clone);
   
};

const agregarElBoton = (e) => {
    //e.target.dataset.titulo tiene que ser igual al que esta dentro del foreach
    // console.log("Agregaste a ", e.target.dataset.titulo);
    carritoObjet = carritoObjet.map((item) => {
        if (item.titulo === e.target.dataset.titulo) {
            item.cantidad++;
        }
        //pasar siempre un return
        return item;
    });

    pintarCarrito();
}

const eliminarElBoton = (e) => {
    //e.target.dataset.titulo tiene que ser igual al que esta dentro del foreach
    // console.log("Agregaste a ", e.target.dataset.titulo);
    carritoObjet = carritoObjet.filter((item) => {
        if (item.titulo === e.target.dataset.titulo) {
            item.cantidad--;
            if (item.cantidad == 0) {
                //este return ase que desaparece el li cuando llega a 0
                return
            }
            return item;
        } else {
            //pasar siempre un return
            return item;
        }
    });

    pintarCarrito();
};
*/

/*-------------------Javascript (Formularios) */
/*--------------------------------Expresiones Regulares-------------------- */
// const nombre = /Mattyu/i;
// const nombreObj = new RegExp("Mattyu", "i");
// console.log(nombreObj);
// // usaremos TEST para encontrar palabras
// console.log(nombre.test("Mattyu"));

// const nombreObj2 = new RegExp("Mattyu|Mateo", "i");
// console.log(nombreObj2.test("Mattyu "));

// // numero y letras
// const numeroBuscar = /[A-Za-z0-9]/i;
// console.log(numeroBuscar.test("sdfsd 54654"));

// // solo numeros
// const regExpLiteral = /^\d+$/gi;
// const str = "1515315";
// console.log(regExpLiteral.test(str));

// // solo letras
// const letras = /^[a-zA-Z ]*$/;
// console.log(letras.test("fsadfsdfsd"));

// //letras con tilde
// const letraTilde = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
// console.log(letraTilde.test("f ó"));

// //VALIDACION DE EMAIL
// const validaEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

// console.log(validaEmail.test("mateo12@gmail.com"));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FORMULARIO JS

// const formularioQuerySelecto = document.querySelector('form')
// const userName  document.querySelector("input[name='userName']");
// const userEmail = document.querySelector("input[name='userEmail']");

/*  const form = document.querySelector("form"),
    userName = document.querySelector("#userName"),
    userEmail = document.querySelector("#userEmail"),
    validacionLetras = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
    validacionEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
    alertSuccess = document.querySelector(".alertSuccess");
// alertName = document.querySelector(".validName"),
// alertEmail = document.querySelector(".validEmail");
const alertName = document.querySelector("#alertName");
const alertEmail = document.querySelector("#alertEmail");


const pintarErrores = (errores) => {
    errores.forEach(item => {
        item.tipo.classList.remove("d-none"); // si es classList no se manda los puntitos
        item.tipo.textContent = item.msg;
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let userNameV = userName.value;
    let userEmailV = userEmail.value;
    // let verResutl = validacionLetras.test(userNameV);
    // console.log(verResutl);

    // no me funcionno hay que hacerlo con temporizador d.classList.add(".d")

    alertSuccess.classList.add("d-none");

    // para almacenar los errores es necesario crear un arrar vacio
    const errores = [];

    // console.log(!userNameV.value.trim()); // el trim limpia los espacios
    if (!validacionLetras.test(userNameV) || !userName.value.trim()) { // esto tiene que entrar en falso !
        // console.log("Formato no válido");
        // return;

            // //este es la funcion del return es para que se salga del codigo------------------------------->
            //  let num1 = 5;
            //     let num2 = "5";
            //     if (num1 === num2) {
            //         console.log("Es igual");
            //         return;
            //     }
            //     if (num1 == num2) {
            //         console.log("si igual");
            //     } else if (num1 !== num2) {
            //         console.log("es diferente");
            //         console.log(typeof num1, typeof num2);
            //     }
     

userName.classList.add("is-invalid");
errores.push({
    tipo: alertName,
    msg: "Formato no válido en el campo nombre, solo letras"
});
}
else {
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
    alertName.classList.add("d-none");
}

if (!validacionEmail.test(userEmailV) || !userEmail.value.trim()) { // esto tiene que entrar en falso !
    // console.log("Formato no válido de email");
    // return;

    userEmail.classList.add("is-invalid");

    errores.push({
        tipo: alertEmail,
        msg: "Escriba un correo valido"
    });
} else {
    userEmail.classList.remove("is-invalid");
    userEmail.classList.add("is-valid");
    alertEmail.classList.add("d-none");
}

if (errores.length != 0) {
    pintarErrores(errores);
    return;
}
mostrarSuccess();
});


const mostrarSuccess = () => {
        alertSuccess.classList.remove('d-none');
        alertSuccess.innerHTML = `<div class="alert alert-success" role="alert">
    Mensaje enviado con exito..!! 😁
    </div>`;
        console.log("Mensaje enviado");
    }
    */

/*----------------------------CURSO PARTE NUMERO TRES No.# 3--------------------------------- */

// const posts = [{
//         userId: 1,
//         id: 1,
//         title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//     },
//     {
//         userId: 1,
//         id: 2,
//         title: "qui est esse",
//         body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//     },
//     {
//         userId: 1,
//         id: 3,
//         title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
//     },
// ];
//_______________CALLBACK JS_______________________

// const findPostById = (id, callback) => {
//     const post = posts.find((item) => item.id === id);

//     if (post) {
//         // la funcion de callback
//         //hasta aqui se manda a llamar la funcionde callback
//         callback(null, post);
//     } else {
//         callback("No se encontro el UserId " + id);
//     }
// };

// //llamando la funcion findPostById
// //se pasa el id y la funcion de callback
// findPostById(1, (err, userId) => {
//     if (err) return console.log(err);
//     // if (err) {
//     //     return console.log(err);
//     // }
//     console.log(userId);

//     findPostById(2, (err, userId) => {
//         if (err) return console.log(err);
//         console.log(userId);

//         findPostById(3, (err, userId) => {
//             if (err) return console.log(err);
//             console.log(userId);

//             findPostById(5, (err, userId) => {
//                 if (err) return console.log(err);
//                 console.log(userId);
//             });
//         });
//     });
// });

//____________________PROMISE JS_____________________ falta entender mas sobre promie async y await

/*
const findPostById = (id) => {

    return new Promise((resolve, reject) => {
        // en tiempo de dos segundos
        setTimeout(() => {
            const prom = posts.find(item => item.id === id);
            if (prom) {
                resolve(prom);
            } else {
                reject("No se encontro el UserId " + id);
            }
        }, 2000);
    });
}

//llamando la funcion findPostById
// findPostById(1)
//     // si encuentra en el then
//     .then(mat => {
//         console.log(mat);
//         // return findPostById(2)
//     })
//     // .then(mat => {
//     //     console.log(mat);
//     //     return findPostById(3)
//     // })
//     // .then(mat => {
//     //     console.log(mat);
//     //     return findPostById(4)
//     // })
//     // si no se encuentra en el catch de errores
//     .catch(err => {
//         console.log(err)
//     })

//´´´´´´´´´´´´´´ con el async´

// const buscar = async (id) => {
const buscar = async () => {
    // usaremos el try catch para manejar los errrores
    try {
        // const post = await findPostById(id);
        // const postUno = await findPostById(1);
        // const postDos = await findPostById(2);
        // console.log(post);
        // console.log(postUno, postDos);

        const promiseAll = await Promise.all([
            findPostById(1),
            findPostById(2)
        ]);
        console.log(promiseAll);
        console.log(promiseAll[0].title, promiseAll[1].title);

    } catch (e) {
        console.log(e);
    } finally {
        console.log("Siempre se va ejecutar si o si");
    }


}

buscar(4);
*/

//````````````````FETCH API

/*
//insertando al url de la pagina jsonplaceholder
const url = 'https://jsonplaceholder.typicode.com/posts/';

// //primer paso antiguo
// fetch(url)
//     .then((res) => res.json()) // pasar json porque asi viene en el formato 
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e))
//     .finally(() => console.log("finalizó"));

//segundo paso nuevo
const findPostById = async (id) => {
    try {
        const res = await fetch(url +  id);
        const post = await res.json();
        console.log(post);
    } catch (e) {
        console.log(e);
    }
};
findPostById(45);
*/

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then((res) => res.json())
//     // .then((data) => console.log(data));
//     .then((data) => console.log(data.forms[0].name, " y con el ", data.forms[0].url));

//.....................CREANDO UNA PAGINA CON LA API DE RICKAND
/*
const cardDinamics = document.querySelector('#cardDinamics'),
    template = document.querySelector("#templateCard").content;

document.addEventListener("DOMContentLoaded", (e) => {
    //aqui llamamos a la funcion donde tenemos nuestra API
        fetchData();
});

const fetchData = async (req, res) => {
    console.log("Recibiendo datos");

    try {
        laoding(true);
        const url = "https://rickandmortyapi.com/api/character";

        //probar res para ver la diferencia
        //solo devuelve una respuesta
        const res = await fetch(url); 
        //probar data para ver la diferencia
        //para extraer el contenido en el cuerpo de json se usa json()
        const data = await res.json();

        //llamando la funcion mostrarCard()
        mostrarCard(data);
        // console.log("mostrando ",data);

    } catch (e) {
        console.log(e);
    } finally {
        laoding(false);
        console.log("sdfsd");
    }
}

// const obj = {
//     dsfasd() {
//         console.log("medatatodos");// INVESTIGAR MAS SOBRE OBJECT, PROPIEDADES METODOS: FUNCIONES ARRAY
//     }
// }

//Mandamos a llamar esta mostrarCard dentro del fetchData para que funcione los items
const mostrarCard = (data) => {
    console.log("Aqui se muestra ", data);

    //siempre utilizar fragment para textContent bluuweb lo xplica 😁
    const fragment = document.createDocumentFragment();
    //este results se trae desde la API
    data.results.forEach(item => {
        // console.log(item);
        //aqui ya no se agrega el content porque ya esta en el querySelector
        const clone = template.cloneNode(true);

        clone.querySelector("h5").textContent = item.name;
        clone.querySelector("p").textContent = item.species;
        clone.querySelector("img").setAttribute("src", item.image);
        //buscar más sobre setAttribute


        // guardamos en el fragment para evitar el reflow // buscar mas sobre el reflow
        fragment.appendChild(clone);

    });

    cardDinamics.appendChild(fragment);
}


const laoding = (status) => {
    const load = document.querySelector("#loading");
    if (status) {
        load.classList.remove("d-none");
    } else {
        load.classList.add("d-none");
    }
}
*/

/*--------------------------------POO EN JAVASCRIPT-------------------- */

/*
function Persona(_nombre, _edad) {
    this.nombre = _nombre;
    this.edad = _edad;

    //metodos
    this.saluda = () => {
        return `${this.nombre} dice hola y su edad es ${this.edad}`;
    }
}

//instanciar
const juanito = new Persona("Juanito", 3);
const pedrito = new Persona("Pedrito", 25);

console.log(juanito.saluda());
console.log(pedrito.saluda());

class Persona {
    constructor(name, edad) {
        this.name = name;
        this.edad = edad;
    }

    get getNombre() {
        return this.nombre;
    }

    set setNombre(nombre) {
        this.nombre = nombre;
    }

    saluda() {
        return `${this.name} dice hola a todos`;
    }

    static probarSaludo(nombre) {
        return `${nombre} probando saludo`;
    }

}


class Estudiante extends Persona {
    #notas2 = [];
    constructor(nombre, edad, notas = []) {
        super(nombre, edad)
        this.notas = notas;
    }

    set setNotas(notas) {
        this.notas.push(notas);
    }
    get getNotas() {
        return this.notas;
    }
    saluda() {
        return `${this.nombre} desde saludar estudiante`;
    }
}


// const juanito1 = new Estudiante("Ana");
// console.log(juanito1.saluda());


// const juanito1 = new Estudiante("Mateo Mendoza", 25 ,7);
const juanito1 = new Estudiante("Mateo Mendoza", 25);
juanito1.setNotas = 18;
juanito1.setNotas = 8;
juanito1.setNotas = 1;
console.log(juanito1.getNotas);


const juanito = new Persona("Mattyu");
console.log(juanito.saluda());

// juanito.setNombre = "Marcos";
// console.log(juanito.getNombre);
*/

//...............................Formulario en POO
/*
const formulario = document.querySelector("#form"),
  cardStudent = document.querySelector("#cardStudent"),
  cardProfesor = document.querySelector("#cardProfesor"),
  templateStudent = document.querySelector("#templateStudent"),
  templateProfesor = document.querySelector("#templateProfesor"),
  alert = document.querySelector(".alert");

const estudiantesArray = [];
const profesoresArray = [];

//delegacion de eventos de los botones apro-repro
document.addEventListener("click", (e) => {
//   console.log(e.target.dataset.nombre);

  if (e.target.dataset.id) {
    // console.log(e.target.matches(".btn-success"));
    if (e.target.matches(".btn-success")) {
      estudiantesArray.map((item) => {
        if (item.id == e.target.dataset.id) {
          item.setEstado = true;
        } 
        console.log(item);
        return item;
      });
    }

    if (e.target.matches(".btn-danger")) {
      estudiantesArray.map((item) => {
        if (item.id == e.target.dataset.id) {
          item.setEstado = false;
        }
        return item;
      });
    }

    Persona.pintarPersonaUI(estudiantesArray, "Estudiante");
  }
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  //Usaremos formData porque nos sirve para no capturar el value de los inputs y se agarra por los names

  const datosForm = new FormData(formulario);
  const [nombre, edad, fecha, opcion] = [...datosForm.values()];
  // var foo = ['En', 'un', 'lugar', 'de', 'la', 'Mancha'];----------------
  //     console.info(...foo); // EL VALOR DE LOS TRES PUNTOS ES PARA SACAR LETRAS DENTRO DE UN ARRAY
  // // En un lugar de la Mancha-----------------

  // console.log(nombre, edad, fecha, opcion);

  // //instanciando la clase estudiante
  // let estudiante = new Estudiante(nombre, edad, fecha);
  //  console.log(estudiante);

  //   //agregando a los estudiantes en el array
  //   estudiantesArray.push(estudiante);
  //   console.log(estudiantesArray);

  //CAMBIE LOS IF POR UN SWITCH
  // if (opcion === "Estudiante") {
  //     let estudiante = new Estudiante(nombre, edad, fecha);
  //     estudiantesArray.push(estudiante);
  //     Persona.pintarPersonaUI(estudiantesArray, opcion);
  // }

  // if (opcion === "Profesor") {
  //     let profesores = new Profesor(nombre, edad, fecha);
  //     profesoresArray.push(profesores);
  //     Persona.pintarPersonaUI(profesoresArray, opcion);
  // }

 if (!nombre.trim() || !edad.trim() || !fecha.trim() || !opcion.trim()) {
     console.log("Algun dato en blaco");
     alert.classList.remove("d-none");
     return; // el return hace que todo el codigo se salga de ejecucióny para evitar usar el else
 }else{
    alert.classList.add("d-none");
 }

  switch (opcion) {
    case "Estudiante":
      let estudiante = new Estudiante(nombre, edad, fecha);
      estudiantesArray.push(estudiante);
      Persona.pintarPersonaUI(estudiantesArray, opcion);
      break;

    case "Profesor":
      let profesores = new Profesor(nombre, edad, fecha);
      profesoresArray.push(profesores);
      Persona.pintarPersonaUI(profesoresArray, opcion);
      break;
    default:
      console.log("NO hay más datos");
      break;
  }
});

//clase persona
class Persona {
  constructor(nombre, edad, fecha) {
    this.nombre = nombre;
    this.edad = edad;
    this.fecha = fecha;
    this.id = `${Date.now()}`;//para generar un id aleatoria
  }

  static pintarPersonaUI(personas, tipo) {
    // if (tipo === "Estudiante") {
    //   cardStudent.textContent = "";
    //   const frag = document.createDocumentFragment();

    //   personas.forEach((item) => {
    //     frag.appendChild(item.agregarEstudiante());
    //   });

    //   cardStudent.appendChild(frag);
    // }

    // if (tipo == "Profesor") {
    //   cardProfesor.textContent = "";
    //   const frag = document.createDocumentFragment();
    //   personas.forEach((item) => {
    //     frag.appendChild(item.agregarProfesor());
    //   });

    //   cardProfesor.appendChild(frag);
    // }

    switch (tipo) {
      case "Estudiante":
        cardStudent.textContent = "";
        const frags = document.createDocumentFragment();
        personas.forEach((item) => {
          frags.appendChild(item.agregarEstudiante());
        });
        cardStudent.appendChild(frags);
        break;

      case "Profesor":
        cardProfesor.textContent = "";
        const frag = document.createDocumentFragment();
        personas.forEach((item) => {
          frag.appendChild(item.agregarProfesor());
        });
        cardProfesor.appendChild(frag);
        break;

      default:
        console.log("No se encontraron más datos");
        break;
    }
  }
}

class Estudiante extends Persona {
  //private
  #estado = false;
  #estudiante = "Estudiante";

  set setEstado(_estado) {
    this.#estado = _estado;
  }

  get getEstudiante() {
    return this.#estudiante;
  }

  agregarEstudiante() {
    const clone = templateStudent.content.cloneNode(true);
    clone.querySelector("h5 .text-primary").textContent = this.nombre;
    clone.querySelector("h6").textContent = this.getEstudiante;
    clone.querySelector(".mat span").textContent = this.fecha;
    clone.querySelector("p span").textContent = this.edad;

    if (this.#estado) {
      clone.querySelector(".badge").className = "badge bg-success";
      clone.querySelector(".btn-success").disabled = true;
      clone.querySelector(".btn-danger").disabled = false;
    } else {
      clone.querySelector(".badge").className = "badge bg-danger";
      clone.querySelector(".btn-success").disabled = false;
      clone.querySelector(".btn-danger").disabled = true;
    }
    clone.querySelector(".badge").textContent = this.#estado
      ? "Aprobado"
      : "Reprobado";

    //aqui se agrega dataset como dinamico y si se agrega en html data-id="bnt" es estatico
    clone.querySelector(".btn-success").dataset.id = this.id;
    clone.querySelector(".btn-danger").dataset.id = this.id;
    return clone;
  }
}

class Profesor extends Persona {
  #profesor = "Profesor";

  agregarProfesor() {
    const clone = templateProfesor.content.cloneNode(true);
    clone.querySelector("h5").textContent = this.nombre;
    clone.querySelector(".mat span").textContent = this.fecha;
    clone.querySelector("h6").textContent = this.#profesor;
    clone.querySelector("p span").textContent = this.edad;

    return clone;
  }
}
*/


/*--------------------------------MODULOS EN JAVASCRIPT-------------------- */
// Funcion IIFE

// (
//     () => {
//         const frutas = ["🍓"];
//         console.log(frutas);
//     }
// )();

// //Importanto variable
// import { plata, sum, frutilla, Fruta } from "./js/appFrutas.js"
// console.log(plata);

// //Importanto funcion
// // import { sum } from "./js/appFrutas.js"
// console.log(sum(10, 15));

// frutilla();

// const guinda=new Fruta("🍒")
// console.log(guinda)


//------------------------LOCAL STORAGE

// localStorage.setItem("Sandia", "🍉");
// localStorage.setItem("Platano", "🍌");

// if (localStorage.getItem("Sandia")) {
//     const sandia = localStorage.getItem("Sandia");
//     console.log(sandia);
// }
// if (localStorage.getItem("Platano")) {
//     const Platano = localStorage.getItem("Platano");
//     console.log(Platano);
// }

// localStorage.removeItem("Sandia");
//  localStorage.clear();



// const frutas = [{
//         nombre: "k ",
//         color: "amarillo",
//     },
//     {
//         nombre: "Mattyu",
//         color: "rojo",
//     },
//     {
//         nombre: "dsf",
//         color: "verde",
//     },
// ];

// lo guardamos en el local storage
// localStorage.setItem("frutas", JSON.stringify(frutas));

// if (localStorage.getItem("frutas")) {
//     const verFrutasConsole = JSON.parse(localStorage.getItem("frutas"));
//     console.log("Obteniendo desde local storage", verFrutasConsole);
// } else {
//     console.log("NO se encontro nada en el local storage 😒😒");
// }

//localStorage.clear();

//--------------PRACTICAS DE TODO CON LOCALSTORAGE---------------------->
const formulario = document.querySelector("#formulario"),
    pintarTable = document.querySelector("#pintarTable"),
    template = document.querySelector("#tamplateTable"),
    alert = document.querySelector(".alert");

let listados = []; // dejamos un array vacio para ir agregando el listado

formulario.addEventListener("submit", (e) => {
    e.preventDefault();


    const data = new FormData(formulario) // usaremos formData para ir trayendo input con name
    const [nombre, fecha] = [...data.values()]
    // console.log(nombre, fecha);


    /////////////////////////AQUI VAMOS AGREGAR LOS TEXTO DE REQUERIDO
    if (!nombre.trim() || !fecha.trim()) { //ahora parte falso y el trim lipmia los espacios
        //link del video || https://www.youtube.com/watch?v=EYmNfsp1aPE&list=PLPl81lqbj-4Iy7yuRrVLn4V6isOVpvlpl&index=3&t=21060s
        console.log("Algun dato en blaco");
        alert.classList.remove("d-none");
        return;
        // el return hace que todo se sale de ejecución

    } else { //ahora parte verdadero
        alert.classList.add("d-none");
        console.log(nombre, fecha);
    }

    //llamando la funcion agregarTod
    agregarTod(nombre, fecha);
    // console.log(nombre, fecha);

    formulario.reset();
    pintarTemplates();
})

//creamos una funcion donde tenga todo la informacion
const agregarTod = (nombre, fecha) => {
    //creando un objeto
    const obj = {
        nombre: nombre,
        fecha: fecha,
        id: `${Date.now()}`
    }
    //madamos los datos al array vacio
    listados.push(obj);
}

const pintarTemplates = () => {
    localStorage.setItem('Litados', JSON.stringify(listados));


    //se agregar un textContent vacio para que no se repita el foreach cuando se agregar en html
    pintarTable.textContent = "";
    const frag = document.createDocumentFragment();

    //del array vacio
    listados.forEach(item => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".id").textContent = item.id;
        clone.querySelector(".name").textContent = item.nombre;
        clone.querySelector(".fecha").textContent = item.fecha;

        //aqui le agregamos un dataset dinamico
        clone.querySelector(".btn-danger").dataset.id = item.id;

        frag.appendChild(clone)
    });

    pintarTable.appendChild(frag);

}

document.addEventListener("click", (e) => {
    //aqui obtenemos el dataset del botton
    // console.log(e.target.dataset.id);
    // console.log(e.target.matches(".btn-danger"));

    if (e.target.matches(".btn-danger")) {
        // console.log("me precionaste");

        //con filter estamos eliminando cada id con el boton
        listados = listados.filter(item => item.id !== e.target.dataset.id)
        pintarTemplates();
    }
});


// esto nos ayudara a leer los datos que tenemos guardado en el local storage
document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("Litados")) { // si existen en el local storage se van agregar en index
        listados = JSON.parse(localStorage.getItem("Litados"));
        pintarTemplates();
    }
})



/*-----------------------------------CREANDO RAMAS Y AGREGANDO CODIGOS EN GITHUB------------------------------------------- */
/*
//VER RAMA
git branch
//Creando otra rama
git checkout -b "localStorage"

git branch
git add .
git commit -m "Terminado"
git push
git push --set-upstream origin localStorage

//Elimina el archivo package.json del repositorio de Git
git rm --cached package.json
//Agrega la línea /package.json al archivo .gitignore
git add .gitignore
git commit -m "Agregando regla para ignorar el archivo package.json"
*/

/*--Para eliminar node_modules-*/
Para eliminar node_modules al repositorio, deberías eliminarlo del repositorio utilizando el comando git rm --cached -r node_modules 
