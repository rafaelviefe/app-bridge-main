import React, { useState } from 'react';
import Button from './Button';
import api from '../api.js';
import './AddCalculo.css';

/*Integração, validação e funcionamento do input*/

const AddCalculo = ({handleCalculoAddition}) => {
    const backend = (entrada) => {
        api
        .get("/bridge?k="+entrada)

        .then((response) => {
            handleCalculoAddition(inputData, response.data.resultado, response.data.tempoExec)
        })

        .catch((err) => {
            console.error("ops! ocorreu um erro " + err);
        })
    };

    const [inputData, setInputData] = useState();

    const handleInputChange = (e) => {

    if (e.target.value < 0 || e.target.value > 100000){
        alert('Digite apenas números entre 0 e 100.000!')
    }else{
        setInputData(e.target.value);
    }
};

    const handleAddCalculoClick = () => {
        backend(inputData);
        setInputData("");
    };

    return (
        <section className='add-calculo-container'>

            <input
                type='number'
                max="100000"
                min="0"

                onChange={handleInputChange}
                value={inputData}

                className='add-calculo-input'
                placeholder='Digite um número entre 0 e 100.000'
            />

            <div className='add-calculo-button-container'>
                <Button onClick={handleAddCalculoClick}>Calcular</Button>
            </div>

        </section>
    );
}

export default AddCalculo;