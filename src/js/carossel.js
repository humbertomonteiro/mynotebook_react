const Carrossel = () => {
    const carrossel1 = document.querySelector('.carrossel1')
    const carrossel2 = document.querySelector('.carrossel2')
    const direita = document.querySelector('.direita')
    const esquerda = document.querySelector('.esquerda')

    direita.onclick = () => {
        carrossel1.classList.toggle('none')
        carrossel2.classList.toggle('none')
    }

    esquerda.onclick = () => {
        carrossel1.classList.toggle('none')
        carrossel2.classList.toggle('none')
    }

    setInterval(() => {
        carrossel1.classList.toggle('none')
        carrossel2.classList.toggle('none')
    }, 6000)


}
  
Carrossel()

export default Carrossel