// Function to pause the floating animation
function pauseAnimation() {
    const arrow = this.querySelector('.arrow');
    arrow.style.animationPlayState = 'paused';
}

// Function to resume the floating animation
function resumeAnimation() {
    const arrow = this.querySelector('.arrow');
    arrow.style.animationPlayState = 'running';
}

// Adding event listeners to all nodes
document.querySelectorAll('.node').forEach(node => {
    node.addEventListener('mouseover', pauseAnimation);
    node.addEventListener('mouseout', resumeAnimation);
});
