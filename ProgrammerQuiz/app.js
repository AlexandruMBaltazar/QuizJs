const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');

const htmlScore = document.querySelector('body > div.result.py-4.bg-light.text-center > div > p > span');

const result = document.querySelector('.result');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index)=>{

        if(answer === correctAnswers[index]){
            score += 25;
        }

    });

    scrollTo(0,0);

    result.classList.remove('d-none');

    let output = 0;

    const timer = setInterval(()=>{

        htmlScore.textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }

    },10);

    htmlScore.textContent = `${score}%`;
});



