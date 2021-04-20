
function criarTarefa(){

   const inputText = document.getElementById("tarefa")

    const selectorOption = document.getElementById("dias-semana")

   

   switch(selectorOption.value){
       case 'segunda':
           let tarefaSegunda = document.getElementById("segunda");

           tarefaSegunda.innerHTML+= `<li>${inputText.value}</li> `;

           break;

           case 'terca':
           let tarefaTerca = document.getElementById("terca");

           inputText.innerHTML+=  `<li>${minhaTarefa.value}</li> `;

           inputText.innerHTML = "";
           break;

           case 'quarta':
           let tarefaQuarta = document.getElementById("quarta");

           tarefaQuarta.innerHTML+=  `<li>${inputText.value}</li> `;

           inputText.innerHTML = "";
           break;

           case 'quinta':
           let tarefaQuinta = document.getElementById("quinta");

           tarefaQuinta.innerHTML+=  `<li>${inputText.value}</li> `;

           inputText.innerHTML = "";
           break;

           case 'sexta':
           let tarefaSexta = document.getElementById("sexta");

           tarefaSexta.innerHTML+=  `<li>${inputText.value}</li> `;

           minhaTarefa.innerHTML = "";
           break;

           case 'sabado':
           let tarefaSabado = document.getElementById("sabado");

           tarefaSabado.innerHTML+=  `<li>${inputText.value}</li> `;

           inputText.innerHTML = "";
           break;

           case 'domingo':
           let tarefaDomingo = document.getElementById("domingo");

           tarefaDomingo.innerHTML+=  `<li>${inputText.value}</li> `;

           inputText.innerHTML = "";
           break;


   }




}

criarTarefa()

 