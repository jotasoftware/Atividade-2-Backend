let btnAdd = document.getElementById('btnAdd');
let btnApagarTudo = document.getElementById('btnApagarTudo');

let listaTarefasFeitas = document.getElementById('tarefasFeitas')
let listaTarefas = document.getElementById('tarefas')

btnAdd.addEventListener('click', () => {
    addTarefa();
    apagarTarefa();
    clicarTarefa();
})
document.getElementById('inputTarefa').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTarefa();
        apagarTarefa();
        clicarTarefa(); 
    }
});
btnApagarTudo.addEventListener('click', () => {
    apagarTudo();
})


function addTarefa() {
    let tarefa = document.getElementById('inputTarefa');
    if(tarefa.value == '') {
        mensagem('Nenhuma tarefa adicionada');
        return;
    }
    let li = document.createElement('li');
    
    let t = document.createTextNode(tarefa.value);
    tarefa.value = '';
    li.appendChild(t);
    
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    listaTarefas.appendChild(li)
}

function apagarTarefa(){
    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.parentNode.removeChild(div);
        }
    }
}

function clicarTarefa(){
    let aux;
    listaTarefas.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            aux = ev.target;
            marcar(aux);
        } 
    }, false);
    listaTarefasFeitas.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            aux = ev.target;
            desmarcar(aux);
        } 
    }, false);
}

function marcar(li) {
    listaTarefasFeitas.appendChild(li);
}
function desmarcar(li) {
    listaTarefas.appendChild(li);
}

function apagarTudo(){
    if(listaTarefasFeitas.childElementCount === 0){
        mensagem("Você não tem tarefas para apagar");
        return;
    }
    const resposta = confirm("Você tem certeza que deseja apagar tudo? ");
    if(resposta == false){
        return;
    }
    while (listaTarefasFeitas.firstChild) {
        listaTarefasFeitas.removeChild(listaTarefasFeitas.firstChild);
    }
}

function mensagem(text){
    alert(text);
}
