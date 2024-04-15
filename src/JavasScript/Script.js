function cadastrarFuncionario(){
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("CPF").value;
    var email = document.getElementById("email").value;

    console.log("Nome: ",nome)
    console.log("CPF:", cpf)
    console.log("Email:", email)

    alert("Funcionario cadastrado")
    document.getElementById("nomeFuncionario").innerHTML = nome
    document.getElementById("CPFFuncionario").innerHTML = cpf
    document.getElementById("emailFuncionario").innerHTML = email
}