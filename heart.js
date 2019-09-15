const heartAnimation = () => {
    const heart = document.getElementById('heart');
    heart.classList.add('is_animating');

    heart.addEventListener('animationend', () => {
        heart.classList.remove('is_animating');
    });
}