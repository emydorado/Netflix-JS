function renderAllFilms (films) {
    let container = document.getElementById("container")
    container.innerHTML = ""
    for(let i = 0; i < films.length; i++) {
        const film = films[i]
        container.innerHTML += film.toHtml(i)
    }
}

renderAllFilms(list)

function filmSelected(position) {
    const film = films[position]
    console.log(film)
}

let films = []
for(let i = 0; i < data.length; i++) {
    const filmJson = data[i]
    const film = new film(filmJson.id, 
            filmJson.title, 
            filmJson.description, 
            filmJson.price,
            filmJson.images, 
            filmJson.category.name)
    films.push(product)      
}

renderAllfilms(films)

