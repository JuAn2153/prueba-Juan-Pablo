function campoNumerico(event) {
    if (event.charCode >= 48 && event.charCode <= 57) {
        return true;
    }
    return false;
}

function validarInput() {
    document.getElementById("botónValidar").disabled = !document.getElementById("campo").value.length;
}

let lista = new Array();

function data() {
    const tomarDatos = document.getElementById("campo").value;
    lista.push(tomarDatos);
    const limpiar = document.getElementById("campo").value = "";
}

function seleccion() {

    switch (opciones.value) {
        case 'MayorMenor':
            let MayorMenor = document.getElementById("opciones").value;
            lista.reverse((b, a) => b - a);
            document.getElementById("resultados").innerHTML = lista;
            break;

        case 'MenorMayor':
            let MenorMayor = document.getElementById("opciones").value;
            lista.sort((a, b) =>  a - b);
            document.getElementById("resultados").innerHTML = lista;
            break;

        case 'SumarTodos':
            let SumarTodos = document.getElementById("opciones").value;
            let total = lista.reduce((a, b) => parseInt(a) + parseInt(b), 0);
            document.getElementById("resultados").innerHTML = total;
            break;

        case 'MultiMismo':
            let MultiMismo = document.getElementById("opciones").value;
            const multiplica = lista.map(multiFunction)
            function multiFunction(num) {
                return num * num;
            }
            document.getElementById("resultados").innerHTML = multiplica;
            break;

        default:
            break;
    }
}
