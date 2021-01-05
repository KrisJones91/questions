

export default class Question {
    constructor({ category, question, correct_answer, incorrect_answers }) {
        this.category = category
        this.question = question
        this.correct = correct_answer
        this.incorrect = incorrect_answers

    }
    get Template() {
        return /*html*/`
        <div class="card p-0 col-md-6" id="">
            <div class="card-header bg-primary">
                    <p class="card-title text-center">${this.category}</p>
                    <h3 class="text-center text-white">${this.question}</h3>
                </div>
                <div class="card-body text-center pt-2">
                   <button id="reveal" onclick="app.questionsController.reveal()">Reveal Answer</button>
                    <div id="answer" hidden>${this.correct}</div>
                </div>
            </div>
        </div>
        
        `
    }




}