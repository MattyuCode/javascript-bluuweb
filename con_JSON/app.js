const apis = async () => {

    try {
        const url = "https://naruto-api.herokuapp.com/api/v1/characters";
        //probar res para ver la diferencia
        //solo devuelve una respuesta
        const res = await fetch(url);
        //probar data para ver la diferencia
        //para extraer el contenido en el cuerpo de json se usa json()
        const data = await res.json();
        console.log(res);
        console.log(data);

    } catch (e) {
        console.log(e);
    }
}
//apis();



const apisNaruto = async () => {

    try {
        const respuesta = await fetch("https://naruto-api.herokuapp.com/api/v1/characters");
        console.log(respuesta);

        if (respuesta.status === 200) {
            const data = await respuesta.json();
            console.log("Datos aqui ", data);
        } else if (respuesta.status === 401) {
            console.log("Sin conexion");
        } else if (respuesta.status === 404) {
            console.log("No se encuentra el personaje");
        }
    } catch (e) {
        console.log(e);

    }
}

apisNaruto();