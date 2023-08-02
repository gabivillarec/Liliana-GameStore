

const Grupo = ({handlerOrder , ascendente , descendente , name}) => {
    return(
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary btn-sm" onClick={() => handlerOrder(ascendente)}>{name}: Mayor</button>
            <button type="button" class="btn btn-primary btn-sm" onClick={() => handlerOrder(descendente)}>{name}: Menor</button>
        </div>
    )
}

export default Grupo;