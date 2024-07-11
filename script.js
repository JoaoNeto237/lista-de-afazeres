//Criando as configuracoes para criar itens na lista
const submit = ()=>{
    //Obtem o valor que foi passado no input
    const texto = document.getElementById("texto").value;
    //verificar se o valor nao ta vazio
    if(texto !== ''){
        //Cria um elemento a lista
        const li = document.createElement('li', 'input');
        li.textContent = texto;

        //adiciona o novo elemento de lista a ul que ja foi criada
        document.getElementById('tasks').appendChild(li);

        //Limpa o input novamente
        document.getElementById("texto").value = '';
    }
};

//Evento sendo chamado pela funcao 'submit'
const add = document.getElementById("botao");
add.addEventListener('click', submit);

//Criando as configuracoes para apagar itens da lista

