function handleClick() {
    const btnContainer = document.querySelector('.button-container');
    btnContainer.classList.add('clicked');

    setTimeout(() => {
      btnContainer.classList.remove('clicked');
    }, 600); // Remove after animation
}
