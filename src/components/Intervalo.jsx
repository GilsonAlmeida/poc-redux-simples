import React from "react";
import "./Intervalo.css";
import Card from "./Card";
import { connect } from "react-redux";
import { alterarNumeroMinimo,alterarNumeroMaximo } from "../store/actions/numeros";

function Intervalo(props) {
  const { min, max } = props;

  return (
    <Card red title="Intervalo de Números">
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min} onChange={e => props.alterarMin(+e.target.value)}/>
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} onChange={e => props.alterarMax(+e.target.value)}/>
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapDispatchToProps(dispactch){
    return {
        alterarMin(novoNumero) {
            //action creator return action
            const action = alterarNumeroMinimo(novoNumero)
            dispactch(action)
        },
        alterarMax(novoNumero){
            const action = alterarNumeroMaximo(novoNumero)
            dispactch(action)
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Intervalo);
