const character = document.getElementById('character-box');
        const block = document.getElementById('block');
        document.addEventListener('click', jump);
        function jump() {
            if (character.classList == 'jump') {
                return;
            }
            character.classList.add('jump');
            setTimeout(() => {
                character.classList.remove('jump');
            }, 500);

        }
        function check() {

            let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
            let characterbottom = parseInt(window.getComputedStyle(character).getPropertyValue('bottom'));
            if (blockleft > 50 && blockleft < 300 && characterbottom <= 150) {
                alert('Try Again!');

            }

        }

        setInterval(() => {
            check();

        }, 10);