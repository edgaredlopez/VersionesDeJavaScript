//======================================CONSUMIR API DE HORARIO GUATEMALA============================================
import fetch from "node-fetch";

//Consumir api de horario guatemala
function horarioGuatemala()
{
    const url = 'https://worldtimeapi.org/api/timezone/America/Guatemala';
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.datetime);

        //parsear a formato de fecha
        const fecha = new Date(data.datetime);

        //fecha en formato dia/mes/año
        const fechaDiaMesAnio = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
        console.log("Fecha formateada: "+fecha);
        console.log("Fecha formateada: "+fechaDiaMesAnio);
    })
}
horarioGuatemala();
