//buscar y encontrar más de una coincidencia de proyectos
//buscr y encontrar poryectos cuyo nombre empieza con el criterio de búsqueda
//ejemplo: "ejerc" y en mi lista tengo "ejercicio1", "ejercicio2" devuelve ambos
//Devuelve "" cuando no existe una coincidencia con ningun proyecto
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
  it("encuentra varios proyectos cuando se tienen varias coincidencias en la lista de proyectos", () => {
    let proyectos = [];
    proyectos.push("proyecto1");
    proyectos.push("proyectoRepetido");
    proyectos.push("proyecto3");
    proyectos.push("proyectoRepetido");
    let listaEsperada = ["proyectoRepetido", "proyectoRepetido"];
    expect(buscarProyecto("proyectoRepetido", proyectos)).toEqual(listaEsperada);
  });
  it("encuentra proyectos cuyo nombre comienza por la expresion buscada", () => {
    let proyectos = [];
    proyectos.push("proyecto1");
    proyectos.push("elProyecto");
    proyectos.push("miProyecto");
    proyectos.push("proyecto3");
    let listaEsperada = ["proyecto1", "proyecto3"];
    expect(buscarProyecto("proy", proyectos)).toEqual(listaEsperada);
  });
  it("Si el proyecto no se encuentra se devuelve vacio", () => {
    let proyectos = [];
    proyectos.push("proyecto1");
    proyectos.push("proyecto2");
    proyectos.push("proyecto3");
    proyectos.push("proyecto4");
    let listaEsperada = [""];
    expect(buscarProyecto("proyecto55", proyectos)).toEqual(listaEsperada);
  });
});


function buscarProyecto(nombre, proyectos) {


    let encontrados = [];
    let hayCoincidencia = false;
    for (const proyecto of proyectos) {
        if (proyecto.startsWith(nombre)) {
            encontrados.push(proyecto);
            hayCoincidencia = true;
        }
    }
    if (!hayCoincidencia) {
        return [""];
    }
    return encontrados;
}