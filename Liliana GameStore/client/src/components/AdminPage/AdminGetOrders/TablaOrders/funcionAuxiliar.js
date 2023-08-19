export const cambiarFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);

    // Obtener día, mes, hora y minutos
    const dia = fecha.getUTCDate();
    const mes = fecha.getUTCMonth() + 1; // Los meses en JavaScript van de 0 a 11
    const hora = fecha.getUTCHours();
    const minutos = fecha.getUTCMinutes();

    // Formatear el día y mes para que tengan siempre 2 dígitos
    const diaFormateado = dia < 10 ? `0${dia}` : dia;
    const mesFormateado = mes < 10 ? `0${mes}` : mes;

    // Formatear la hora y minutos para que tengan siempre 2 dígitos
    const horaFormateada = hora < 10 ? `0${hora}` : hora;
    const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos;

    // Crear la cadena de formato deseado (hora en formato de 24 horas)
    const formatoDeseado = `${diaFormateado}/${mesFormateado} ${horaFormateada}:${minutosFormateados}`;
    return formatoDeseado;
};