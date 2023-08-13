const modificarArray=(array, n = 4)=> {
    if (array.length > n) {
      array.splice(n); // Mantener solo los primeros n elementos y eliminar el resto
    } else if (array.length < n) {
      // Puedes decidir qué valores agregar en caso de que haya menos de cinco elementos
      // Por ejemplo, puedes agregar ceros:
      for (let i = array.length; i < n; i++) {
        array.push(0);
      }
    }
    return array;
  }

  export default modificarArray;