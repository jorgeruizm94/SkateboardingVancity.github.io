const characterBox = document.getElementById('character-box');
        const block = document.getElementById('block');
        const character = document.getElementById('character');



        let gameover = new Audio('gameover.wav');
        let music = new Audio('Battles.wav');
        let jumpMusic=new Audio('jump.wav');

        let score = document.getElementById('score');
        let scoreIncrease = 0;

        music.volume=0.5;
        music.play();
        music.loop = true;
        
        

        document.addEventListener('click', jump);
        function jump() {
            if (characterBox.classList == 'jump') {
                return;
            }
            
            characterBox.classList.add('jump');
            jumpMusic.volume=0.2;
            jumpMusic.play();
           
            setTimeout(() => {
                characterBox.classList.remove('jump');
                jumpMusic.paused();
                
                jumpMusic.currentTime=0;
              
              
            }, 700);

        }

        let flag = 1;
        function check() {

            let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
            let characterbottom = parseInt(window.getComputedStyle(characterBox).getPropertyValue('bottom'));

            if (blockleft > 30 && blockleft < 300 && characterbottom <= 80) {

                music.pause();
                block.style.animationPlayState = 'paused';
                character.style.animationPlayState = 'paused';
                characterBox.style.animationPlayState = 'paused';
                jumpMusic.muted=true;


                if (flag == 1) {
                    gameover.volume=0.2;
                    gameover.play();
                    
                    flag++;
                    
                }


            }
            else {

                scoreIncrease++;
                score.innerHTML = scoreIncrease;
            }


        }

        setInterval(() => {
            check();

        }, 10);

        function RefreshPage() {
            location.reload();
        }