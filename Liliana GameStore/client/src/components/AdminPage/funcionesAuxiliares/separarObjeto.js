const separarPorTipo = (objeto)=> {
    const propiedadesTexto = [];
    const propiedadesNumericas = [];
  
    for (const key in objeto) {
      if (typeof objeto[key] === 'string') {
        propiedadesTexto.push(key);
      } else if (typeof objeto[key] === 'number') {
        propiedadesNumericas.push(key);
      }
    }
  
    return [propiedadesTexto, propiedadesNumericas];
  }

export default separarPorTipo