class film {
    constructor(id, title, Rating, sinopsis, Clasificación, banner, Tarjeta) {
        this.id = id
        this.title = title
        this.sinopsis = sinopsis
        this.Clasificación = Clasificación
        this.banner = banner
        this.Tarjeta = Tarjeta
    }
    toHtml(position) {
        return`
        <div class="film" onclick='filmSelected(${position})'>
        <h1>${this.title}</h1>
        <p>${this.sinopsis}</p>
        `
    }
}