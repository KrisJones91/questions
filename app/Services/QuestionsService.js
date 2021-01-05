import { opentdb } from "./AxiosService.js"
import { ProxyState } from '../AppState.js'
import Question from '../Models/Question.js'

class QuestionsService {
    async getQuestion(url) {
        let res = await opentdb.get(url)
        ProxyState.questions = res.data.results.map(q => new Question(q))
        ProxyState.next = res.data.next || ''
        console.log(res.data)
        ProxyState.previous = res.data.previous || ''
    }
}

export const questionService = new QuestionsService();