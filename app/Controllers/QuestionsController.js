import { ProxyState } from "../AppState.js"
import { questionService } from "../Services/QuestionsService.js"


function _DrawQuestions() {
    let template = ''
    const question = ProxyState.questions
    question.forEach(q => template += q.Template)
    document.getElementById('mainCard').innerHTML = template

}

function _drawAnswer() {
    document.getElementById('reveal').hidden = true
    document.getElementById('answer').hidden = false
}
//Leaving this for possible questions later...
// function _drawNext() {
//     //@ts-ignore
//     document.getElementById("next").disabled = ProxyState.next.length <= 0
//     console.log(ProxyState.next)
// }
// function _drawPrevious() {
//     // @ts-ignore
//     document.getElementById("previous").disabled = ProxyState.previous.length <= 0
// }

export default class QuestionsController {
    constructor() {
        //Register subscribers
        ProxyState.on('questions', _DrawQuestions)

        //kept for questions
        //ProxyState.on('next')
        // ProxyState.on('previous')

        //Fetch data
        questionService.getQuestion('');
    }

    next() {
        questionService.getQuestion()
    }
    previous() {
        questionService.getQuestion(ProxyState.previous)
    }
    reveal() {
        _drawAnswer()
    }

}