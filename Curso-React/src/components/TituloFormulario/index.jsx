import './titulo-formulario.estilos.css'

// no react, componentes são FUNÇÕES

// propr é um OBJETO
// props.children
export function TituloFormulario({children}) {
  return (
    <h2 className='titulo-form'>
      {children}
    </h2>
  )
}