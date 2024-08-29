export default function degradeInicio() {
    window.addEventListener('load', () => {
        const elements = document.querySelectorAll('header, .main-promo, .main-big-image, .main-text-products, .main-cards, footer');

        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('show');
            }, index * 200);
        });
    });
}