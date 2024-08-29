export default function scrollInicio() {
    const inicioHeader = document.querySelector('a[href="#inicio"]');

    function scrollToInicio(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    inicioHeader.addEventListener("click", scrollToInicio);
}
