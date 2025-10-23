import './formulario-de-eventos.estilos.css';
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";

export function FormularioDeEventos() {
  return (
    <form className='form-evento'>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>


      <div className='campos'>
        <CampoDeFormulario>
              <Label htmlFor="nomeEvento">
                Nome do evento
              </Label>
              <CampoDeEntrada
              type="text"
              id='nomeEvento'
              placeholder='Summer dev hits'
              name='nomeEvento'/>
        </CampoDeFormulario>
              <CampoDeFormulario>
              <Label htmlFor="dataEvento">
                Data do evento
              </Label>
              <CampoDeEntrada
              type="date"
              id='dataEvento'
              placeholder='Summer dev hits'
              name='dataEvento'/>
        </CampoDeFormulario>
      </div>
    </form>
    
  )
}