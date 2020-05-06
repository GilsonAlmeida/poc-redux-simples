import React from "react";
import Card from "./Card";
import { connect } from "react-redux";


const Sorteio =  (props) => {
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min)) + min;

  return (
    <Card purple title="Sorteio de um Números">
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{aleatorio}</strong>
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
    return {
      min: state.numeros.min,
      max: state.numeros.max,
    };
  }
  
  export default connect(mapStateToProps)(Sorteio);
