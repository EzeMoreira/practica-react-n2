export function getAllProductos(buscar) {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${buscar}`).then(res=>res.json());
}