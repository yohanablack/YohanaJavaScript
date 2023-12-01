function tocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
 }
 
 const listaDeTeclas = document.querySelectorAll ('.tecla');
 
 let contador;
 
 //enquanto
 while (contador < listaDeTeclas.length) {
   const tecla = listaDeTeclas[contador];
   const instrumento = tecla.classList[1];
 
   console.log(instrumento);

   tecla.onclick = function () {
     tocaSom('#toca_som_pom')

   };
 
   contador = contador + 1;
 
   console.log(contador);
 }
