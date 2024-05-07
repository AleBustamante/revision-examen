//buscar y encontrar más de una coincidencia de proyectos
//buscr y encontrar poryectos cuyo nombre empieza con el criterio de búsqueda
//ejemplo: "ejerc" y en mi lista tengo "ejercicio1", "ejercicio2" devuelve ambos
describe("Buscar", () => {
  it("no encuentra proyectos cuando no se tiene ninguno en la lista de proyectos", () => {
    let proyectos = [];
    expect(buscarProyecto("ejercicio1", proyectos)).toEqual("");
  });
});


function buscarProyecto(nombre, proyectos) {
    return "";
}