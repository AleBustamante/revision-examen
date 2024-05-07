//buscar y encontrar más de una coincidencia de proyectos
//buscr y encontrar poryectos cuyo nombre empieza con el criterio de búsqueda
//ejemplo: "ejerc" y en mi lista tengo "ejercicio1", "ejercicio2" devuelve ambos
describe("Buscar", () => {
  it("no encuentra proyectos cuando no se tiene ninguno en la lista de proyectos", () => {
    let proyectos = [];
    expect(buscarProyecto("ejercicio1", proyectos)).toEqual("");
  });
  it("encuentra un poryecto cuando el mismo existe en una lista de 1 proyecto", () => {
    let proyectos = [];
    proyectos.push("miUnicoProyecto");
    expect(buscarProyecto("miUnicoProyecto", proyectos)).toEqual("miUnicoProyecto");
  });
});


function buscarProyecto(nombre, proyectos) {
    if (proyectos.length === 0) {
        return "";
    }
    if (proyectos[0] === nombre) {
        return proyectos[0];
    }
}