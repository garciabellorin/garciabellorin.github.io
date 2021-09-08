window.onload = function () {
    'use strict';

    // Homepage
    const homepage = document.getElementById('homepage');
    homepage.onclick = function() { location.href = '/'; };

    let boxInText = '';
    let selectedAnimation = ANIMATIONS['Blank'];

    let animationIdx;
    let animationTimer;
    let running = false;
    let refreshRate = 250; // ms

    const textArea = document.getElementById('text-area');

    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const animation = document.getElementById('animation');
    const sizeDropdown = document.getElementById('fontsize');
    const turbo = document.getElementById('turbo');
    
    startButton.onclick = startAnimation;
    stopButton.onclick = stopAnimation;
    animation.onchange = setAnimation;
    sizeDropdown.onchange = setFontSize;
    turbo.onchange = setTurbo;

    function startAnimation() {
        boxInText = textArea.value;
        stopButton.disabled = false;
        startButton.disabled = true;
        if (selectedAnimation) {
            textArea.value = selectedAnimation[animationIdx = 0];
            running = true;
            animationTimer = setTimeout(updateAnimation, refreshRate);
        } else {
            textArea.value = "";
        }
    }

    function updateAnimation() {
        if (running) {
            textArea.value = selectedAnimation[animationIdx++];
            animationIdx = animationIdx % selectedAnimation.length;
            setTimeout(updateAnimation, refreshRate);
        }
    }

    function stopAnimation() {
        clearTimeout();
        running = false;
        stopButton.disabled = true;
        startButton.disabled = false;
        textArea.value = boxInText;
    }

    function setAnimation() {
        const which = animation.value;
        selectedAnimation = ANIMATIONS[which].split('=====\n');
    }

    function setFontSize() {
        const fontClasses = ['tiny', 'small', 'medium', 'large', 'xl', 'xxl'];
        const fontsJson = {
            "Tiny": 'tiny',
            "Small":'small',
            "Medium": 'medium',
            "Large": 'large',
            "Extra Large" : 'xl',
            "XXL": 'xxl'
        }
        const selectedSize = sizeDropdown.value;
        
        if (!textArea.classList.contains(fontsJson[selectedSize])) {
            fontClasses.forEach(function(fontClass, _) {
                textArea.classList.remove(fontClass);
            });
            textArea.classList.add(fontsJson[selectedSize]);
        }
    }

    function setTurbo() {
        refreshRate = turbo.checked ? 50 : 250;
    }
};