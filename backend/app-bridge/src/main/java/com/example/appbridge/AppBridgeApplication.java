package com.example.appbridge;

import com.example.appbridge.DTO.ResponseDTO;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@RestController
public class AppBridgeApplication {
// cálculo feito pelo backend (tempo de execução e output)
	public static void main(String[] args) {
		SpringApplication.run(AppBridgeApplication.class, args);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/bridge")
	public ResponseDTO qtdNumeros(@RequestParam Long k) {
        Long inicio = System.nanoTime();
        Long resultado = this.calcular(k); // quantidade de primos menores que 'k'
        Long tempo_exec = (System.nanoTime() - inicio) / 1000000; //pegar o valor em milissegundos

        ResponseDTO resposta = new ResponseDTO();

        resposta.setResultado(resultado);
        resposta.setTempoExec(tempo_exec);
        
		return resposta;
	}

    private Long calcular(Long k) {
        Long n, qtd_primos, divisor;
        boolean primo;
    
        qtd_primos = 0L;
        
        for (n = 2L; n < k; n++){ //vai percorrer por todos os números de 2 até o valor de entrada

            divisor = 2L;
            primo = true;
            //os elementos são resetados para que o loop recomece

            while (divisor < n && primo){
            //rodará até que ache um divisor ou acabe as opções
                if (n % divisor == 0) primo = false;

                divisor += 1;
            }
            //se o value boolean de 'primo' não mudar, 'n' atende os requisitos de um número primo
            if (primo) qtd_primos += 1;
        }
        return qtd_primos;
    }
}
