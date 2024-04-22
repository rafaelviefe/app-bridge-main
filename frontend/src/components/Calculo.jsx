import React from 'react';
import './Calculo.css';

/*Output (saída)*/

const Calculo = ({calculo}) => {
    return (
        <section className='container_calc'>

            <div className='elemento_child'>
                Entrada: {calculo.calc_entrada}
            </div>

            <div className='elemento_child'>
                Resultado: {calculo.calc_resultado}
            </div>
            
            <div className='elemento_child'>
                Tempo: {calculo.calc_tempo_exec}ms
            </div>

        </section>
    );
}
 
export default Calculo;