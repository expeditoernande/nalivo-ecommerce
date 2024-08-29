export default function handleNavBar() {
    const produtosHeader = document.querySelector('a[href="#produtos"]');
    const produtosTexto = document.querySelector('#produtos');

    function scrollMenu (event) {
        event.preventDefault();
        produtosTexto.scrollIntoView({behavior: 'smooth'});
    };
    produtosHeader.addEventListener('click', scrollMenu) 
}