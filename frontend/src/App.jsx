import React, { useState } from 'react';
import AddCalculo from './components/AddCalculo';
import ListaCalculo from './components/ListaCalculo';
import {v4 as uuidv4} from 'uuid';
import './App.css';

/*Manipulação das listas*/

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

    <main className='container'>

      <h1>Desafio Bridge | Desenvolvimento Web</h1>
      <p align='justify'>Esta <strong>Aplicação Web</strong> calcula a quantidade de números primos <strong>n</strong> menores que <strong>k</strong>.</p>

      <AddCalculo handleCalculoAddition={handleCalculoAddition} /> 
      <hr color='#999999'/>

      <p className='format'><strong>Histórico</strong></p>
      <ListaCalculo lista_calculo={lista_calculo} />

      <br /><hr color='#999999'/>
      <p className='format'><em>Desenvolvido por <a href="https://github.com/rafaelviefe/calculadora-de-primos" target="_blank" rel="noreferrer">Rafael Vieira Ferreira</a></em></p>

    </main> 
  );
}

export default App;
