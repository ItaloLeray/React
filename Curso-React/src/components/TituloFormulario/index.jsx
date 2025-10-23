// no react, componentes são FUNÇÕES

// propr é um OBJETO
// props.children

export function TituloFormulario(props) {
  return (
    <h2>
      {props.children}
    </h2>
  )
}