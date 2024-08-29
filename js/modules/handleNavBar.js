export default function handleNavBar() {
    const botao = document.querySelector('.material-symbols-outlined');
    const lista = document.querySelector('.ul-web');
    const opcoes = document.querySelectorAll('.ul-web li');

    function ativarLista() {
        lista.classList.toggle('ativo');
    }

    function outsideClick(event) {
        if (!lista.contains(event.target) && !botao.contains(event.target)) {
            lista.classList.remove('ativo');
        }
    }

    function fecharMenu() {
        lista.classList.remove('ativo');
    }

    botao.addEventListener('click', ativarLista);
    document.addEventListener('click', outsideClick);

    opcoes.forEach(opcao => {
        opcao.addEventListener('click', fecharMenu);
    });
}