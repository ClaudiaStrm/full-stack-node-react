import React from 'react';


const Inicio = (props) => {
  return(
    <div className="card-body">
      {props.children}
    </div>
  )
}



const Name = (props) => {
  return(
    <div className="name">
      {props.nome}
    </div>
  )
}


const Star = ({ selected=false, onClick=f=>f }) =>
 <div className={(selected) ? "star selected" : "star"}
      onClick={onClick}>
 </div>

const Dados = (props) => {
  return(
    <Inicio>
      <div className="inner-body">

        <div className="body">
          <div className="inner-body">
            <Name name={props.name}/>
          </div>

          <div className="inner-body">
          {[...Array(5)].map((n, i) =>
            <Star key={i}
                  selected={i<props.starsSelected}
                  onClick={() => props.change(props.id, i+1)}
          />)}
          </div>
        </div>
      </div>
    </Inicio>
  )
}

export { Dados }
