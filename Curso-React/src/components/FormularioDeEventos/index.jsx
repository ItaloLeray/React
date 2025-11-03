import './formulario-de-eventos.estilos.css';
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from '../Botao';
import { TemaDoEvento } from '../TemaDoEvento';

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
            name='nomeEvento' />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do evento
          </Label>
          <CampoDeEntrada
            type="date"
            id='dataEvento'
            placeholder='Summer dev hits'
            name='dataEvento' />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="temaEvento">
            Tema do Evento
          </Label>

        <TemaDoEvento>
        </TemaDoEvento>

        </CampoDeFormulario>

        <div className='botao'>
          <Botao>Criar evento</Botao>
        </div>

      </div>
    </form>
  )
}