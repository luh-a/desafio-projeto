//criar um array de objetos pessoa
const pessoas = []

//pegando elementos do DOM
const formPessoa = document.querySelector("#formulario-pessoa")
const divPessoa = document.querySelector("#div-lista-pessoas")

//capturando o evento do submit do formulário
formPessoa.addEventListener('submit', (evt)=>{
    //interrompendo o efeito padrão do formulário
    evt.preventDefault()

    //criando o objeo data form
    const dadosForm = new FormData(formPessoa)

    //criando e preenchendo o objeto literal pessoa
    const pessoa = {
        nome: dadosForm.get('nome'),
        idade: dadosForm.get('idade'),
        renda: dadosForm.get('renda')
    }

    //chamando a função addPessoa e passando o objeto literal pessoa
    addPessoa(pessoa)

    //limpando o formulário
    formPessoa.reset()
})

//função para crud
//função para adicionar pessoa
const addPessoa = (objPessoa) => {
    //adicionando o objeto no array pessoas, vindo do parâmetro da função
    pessoas.push(objPessoa)

    listPessoa()
}

//função listar pessoas
const listPessoa = () => {
    //limpar a div
    divPessoa.innerHTML = ''

    //percorrendo o array com a estrutura de repetição foreach
    pessoas.forEach((elem, i)=>{
        divPessoa.innerHTML += `<div class='item-pessoa'> ${i + 1} - ${elem.nome} ${elem.idade} R$ ${parseFloat(elem.renda).toFixed(2).replace('.',',')} </div>`
    })
}