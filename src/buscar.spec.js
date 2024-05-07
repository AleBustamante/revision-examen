//buscar y encontrar más de una coincidencia de proyectos
//buscr y encontrar poryectos cuyo nombre empieza con el criterio de búsqueda
//ejemplo: "ejerc" y en mi lista tengo "ejercicio1", "ejercicio2" devuelve ambos
describe("Buscar", () => {
  it("no encuentra proyectos cuando no se tiene ninguno en la lista de proyectos", () => {
    let proyectos = [];
    let listaEsperada = [""];
    expect(buscarProyecto("ejercicio1", proyectos)).toEqual(listaEsperada);
  });
  it("encuentra un poryecto cuando el mismo existe en una lista de 1 proyecto", () => {
    let proyectos = [];
    proyectos.push("miUnicoProyecto");
    let listaEsperada = ["miUnicoProyecto"];
    expect(buscarProyecto("miUnicoProyecto", proyectos)).toEqual(listaEsperada);
  });
  it("encuentra un proyecto cuando el mismo existe en una lista de varios proyectos", () => {
    let proyectos = [];
    proyectos.push("proyecto1");
    proyectos.push("proyecto2");
    proyectos.push("proyecto3");
    proyectos.push("proyecto4");
    let listaEsperada = ["proyecto2"];
    expect(buscarProyecto("proyecto2", proyectos)).toEqual(listaEsperada);
  });
});


function buscarProyecto(nombre, proyectos) {
    let encontrado = [];
    if (proyectos.length === 0) {
        encontrado.push("");
        return encontrado;
    }

    for (const proyecto of proyectos) {
        if (proyecto === nombre) {
            encontrado.push(proyecto);
            return encontrado;
        }
    } 
}