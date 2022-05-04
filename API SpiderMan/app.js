/*
const cardDinamicas = document.querySelector("#cardDinamics"),
    templates = document.querySelector("#templateCard")

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

const fetchData = async () => {
    try {
        loading(true)

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
                'X-RapidAPI-Key': '7673c74b7emsh53a16ab9f064abcp194dd0jsn506bec771079'
            }
        }

        //LINK DE LA PAGINA TO//https://rapidapi.com/apidojo/api/online-movie-database/
        const res = await fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=spiderman', options)
        // .then(response => response.json())
        // .then((data) => {
        //     console.log(data)
        //     const listArray = data.d
        //     listArray.map((item) => {
        //         // console.log(item.l)
        //         // console.log(item.q)
        //         // console.log(item.i.imageUrl)
        //         //  console.log(item.s)
        //     })
        // })

        const data = await res.json()
        console.log("Viendo todo  ", data)
        views(data)
    } catch (e) {
        console.log(e)
    } finally {
        loading(false)
    }
}


//Mandamos a llamar esta views dentro del fetchData para que funcione los items
const views = (data) => {
    const fragment = document.createDocumentFragment()

    //este d se trae desde la API:: d: Array(8)
    data.d.forEach(item => {
        const clone = templates.content.cloneNode(true)
        clone.querySelector("h5").textContent = item.l
        clone.querySelector("p").textContent = item.s
        clone.querySelector("img").setAttribute("src", item.i.imageUrl)
        console.log(item.l)


        fragment.appendChild(clone)
    })

    cardDinamicas.appendChild(fragment)
}

const loading = (status) => {
    const load = document.querySelector("#loading")
    if (status) {
        load.classList.remove("d-none")
    } else {
        load.classList.add("d-none")
    }
}
*/


/*-------------------------------------*/


const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => mostrarData(data))
    .catch(err => console.log(err))



const mostrarData = (data) => {
    console.log(data)
    let body = ''
    for (let i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].username}</td><td>${data[i].email}</td><td>${data[i].website}</td></tr>`
    }
    document.getElementById('data').innerHTML = body

}



const HTMLResponse = document.querySelector("#app");
const ul = document.createElement("ul");

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);                
        data.forEach(item => {
            let elem = document.createElement("li");
            elem.appendChild(
                document.createTextNode(`${item.name} ${item.email}`)
            );
            ul.appendChild(elem);
        });
        HTMLResponse.appendChild(ul);
    });