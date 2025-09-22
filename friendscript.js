// Add these lines to your script.js file
document.getElementById('poem-p1').innerHTML = `In this corner of the web, so new,<br>A little hello is waiting for you.<br>Step inside, let the fun begin,<br>A friendly space to let you in,<br>Where every moment is a win.`;

document.getElementById('poem-p2').innerHTML = `No need to rush, take your own sweet time,<br>With colors soft and a gentle chime.<br>A journey shared, a path we start,<br>It’s a simple art,<br>To find a home for your heart.`;
// The Mini-Quiz Logic
const quizQuestions = [
    {
        question: "Hello! What's your name?",
        type: "input",
        placeholder: "Type your name here"
    },
    {
        question: "What's a hobby you love to do?",
        type: "input",
        placeholder: "Tell me something you enjoy!"
    },
    {
        question: "Pick one: a good book or a great movie?",
        type: "radio",
        options: ["A good book", "A great movie", "Both!"]
    },
    {
        question: "What's your favorite type of music?",
        type: "radio",
        options: ["Pop", "Rock", "Classical", "Hip-Hop", "Something else"]
    },
    {
        question: "If you had to pick a favorite color, what would it be?",
        type: "input",
        placeholder: "Example: Blue, Red, Yellow"
    }
];

const quizQuestionsEl = document.getElementById('quiz-questions');
const quizResultEl = document.getElementById('quiz-result');

function renderQuiz() {
    quizQuestions.forEach(q => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `<p>${q.question}</p>`;
        
        if (q.type === "input") {
            const input = document.createElement('input');
            input.type = "text";
            input.placeholder = q.placeholder;
            questionDiv.appendChild(input);
        } else if (q.type === "radio") {
            q.options.forEach(option => {
                const radioContainer = document.createElement('div');
                const radio = document.createElement('input');
                radio.type = "radio";
                radio.name = q.question;
                radio.value = option;
                
                const label = document.createElement('label');
                label.textContent = option;
                
                radioContainer.appendChild(radio);
                radioContainer.appendChild(label);
                questionDiv.appendChild(radioContainer);
            });
        }
        
        quizQuestionsEl.appendChild(questionDiv);
    });

    // Add a submit button at the end of the quiz
    const submitButton = document.createElement('button');
    submitButton.textContent = "See My Results!";
    submitButton.addEventListener('click', () => {
        const nameInput = document.querySelector('input[placeholder="Type your name here"]');
        const hobbyInput = document.querySelector('input[placeholder="Tell me something you enjoy!"]');

        const name = nameInput ? nameInput.value : "Friend";
        const hobby = hobbyInput ? hobbyInput.value : "your hobbies";

        quizResultEl.textContent = `Hello, ${name}! It's great to know more about you and your love for ${hobby}. Thanks for sharing!`;
    });
    quizQuestionsEl.appendChild(submitButton);
}