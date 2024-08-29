export default function handleNavBar() {
    const botao = document.querySelector('.material-symbols-outlined');
    const lista = document.querySelector('.ul-web');

    function ativarLista() {
        lista.classList.toggle('ativo');
    }

    function outsideClick(event) {
        if (!lista.contains(event.target) && !botao.contains(event.target)) {
            lista.classList.remove('ativo');
        }
    }

    botao.addEventListener('click', ativarLista);
    document.addEventListener('click', outsideClick);
}
