import './tema-do-evento.estilo.css'

export function TemaDoEvento() {
    return (
        <select name="temaEvento" id="temaEvento" className='temaEvento'>
            <optgroup>
                <option value="Aniversário">Aniversário</option>
                <option value="Show">Show</option>
                <option value="Chá de bêbê">Chá de bebê</option>
            </optgroup>
        </select>
    )
}