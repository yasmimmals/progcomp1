function calcular(){
    // vamos criar 2 variáveis
    // JS as variaveis não possuem tipo
    let mascote, homenagem, leite
    // recupera o valor do mascote digitado pelo usuário
    mascote = document.getElementById("mascote").value
    // recupera o valor da homenagem digitado pelo usuário
    Homenagem = document.getElementById("homenagem").value
    // recupera a qtde de litros de leite
    leite = document.getElementById("leite").value
    // recupera a qtd avulsa de kit de alimentação
    kitAvulso = document.getElementById("kitAvulso").value
    // recupera a qtd avulsa de suplemento
    suplementoAvulso = document.getElementById("suplementoAvulso").value
    // calcular a soma
    let soma = Number(mascote) + Number(homenagem) + (2 * Number(leite))
                (30 * Number(kitAvulso)) + (15 * Number(suplementoAvulso))
    // retorna o valor ao HTML
    // template string
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}