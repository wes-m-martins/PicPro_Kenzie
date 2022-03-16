const listaOpcoes = document.querySelector(".secaoDetalhesConta__opcoesTransacoes")
listaOpcoes.addEventListener("click", identificarOpcoes)

function identificarOpcoes(event){
    const li = event.target
    if (li.tagName == "LI"){
        const id = li.id
       const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)
       removeClasseMostrar()
       secaoEscolha.classList.add("mostrar")
    }   
    
}
function removeClasseMostrar(){
    const divs = document.querySelectorAll(".secaoTransacoes .container div")
    for(let i=0; i<divs.length;i++){
        divs[i].classList.remove("mostrar")
    }
}