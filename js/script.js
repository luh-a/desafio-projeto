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
    formPessoa.requestFullscreen()
})