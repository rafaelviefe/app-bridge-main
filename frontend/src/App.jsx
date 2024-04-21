import React, { useState } from 'react';
import AddCalculo from './components/AddCalculo';
import ListaCalculo from './components/ListaCalculo';
import {v4 as uuidv4} from 'uuid';
import './App.css';

/*Manipulação de listas*/

const App = () => {
  const [lista_calculo, setListaCalculo] = useState([]);

  const handleCalculoAddition = (entrada, resultado, tempo_exec) => {
    const novoCalculo = [
      {
        id: uuidv4(),
        calc_entrada: entrada,
        calc_resultado: resultado,
        calc_tempo_exec: tempo_exec
      }, ...lista_calculo
    ];

    setListaCalculo(novoCalculo);
  };

/*Escopo principal*/ 

  return (

    <div className='container'>

      <h1>Desafio Bridge | Desenvolvimento Web</h1>
      <p align='justify'>Esta <strong>Aplicação Web</strong> calcula a quantidade de números primos <strong>n</strong> menores que <strong>k</strong>.</p>

      <AddCalculo handleCalculoAddition={handleCalculoAddition} /> 
      <hr />

      <p><strong className='format'>Histórico</strong></p>
      <ListaCalculo lista_calculo={lista_calculo} />

      <br /><hr />
      <p className='format'><em>Desenvolvido por <a href="https://github.com/rafaelviefe/app-bridge-main" target="_blank" rel="noreferrer">Rafael Vieira Ferreira</a></em></p>

    </div> 
  );
}

export default App;
