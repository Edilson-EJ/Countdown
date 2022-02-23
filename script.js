const diasHT = document.querySelector('#dia')
const horasHT = document.querySelector('#hora')
const minutosHT = document.querySelector('#minutos')
const segundosHT = document.querySelector('#segundos')

const dataAtual = new Date().getFullYear() // função para pega a data atual
const dataEvento = new Date('May 18 2022 00:00:00') // colocando a data do evento

const atuali_contan = () =>{
    const contagem_regresiva = new Date()
    const diferença = dataEvento - contagem_regresiva
    const dias = Math.floor(diferença / 1000 /60 / 60 / 24) // 1000(numeros de sugundos) 60 (minutos) 60 (horas) 24 (dias)
    const horas = Math.floor(diferença / 1000 /60 / 60) % 24 // armazena as horas
    const minutos = Math.floor(diferença / 1000 /60) % 60 // minutos
    const segundos = Math.floor(diferença / 1000) % 60

    diasHT.textContent = dias < 10 ? '0' + dias :  dias
    horasHT.textContent = horas < 10 ? '0' + horas : horas
    minutosHT.textContent = minutos < 10 ? '0' + minutos:minutos 
    segundosHT.textContent = segundos < 10 ? '0' + segundos : segundos // ternario ( se segundos for menor que 10 adciona um zero a esquerda : caso seja maior que 10 recebera os segundos)
     

} 

setInterval(atuali_contan,1000) // função para atualizar a função a cada 1 segundo que equivale a 1000
