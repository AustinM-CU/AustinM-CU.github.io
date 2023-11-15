document.addEventListener("DOMContentLoaded", function () {
    const newQuoteButton = document.querySelector('#js-new-quote');
    const showAnswerButton = document.querySelector('#js-tweet');
    const quoteTextElement = document.getElementById("js-quote-text");
    const answerTextElement = document.getElementById("js-answer-text");

    let currentAnswer = ""; 

    newQuoteButton.addEventListener("click", getQuote);
    showAnswerButton.addEventListener("click", showAnswer);

    function getQuote() {
        const apiUrl = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch quote');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                displayQuote(data.question);
                
                
                currentAnswer = data.answer;
            })
            .catch(error => {
                console.error(error);
                alert('Failed to fetch quote. Please try again.');
            });
    }

    function displayQuote(question) {
        quoteTextElement.textContent = `Question: ${question}`;
        

        answerTextElement.style.display = "none";
    }

    function showAnswer() {

        
        answerTextElement.textContent = `Answer: ${currentAnswer}`;
        answerTextElement.style.display = "block";
    }
});
