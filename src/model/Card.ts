export class Card {
    category: string;
    type: String;
    difficulty: string;
    question: string;
    correct_answer: string;
    answers: Array<String>;
    responded: boolean;
    correct: boolean;
    answerIndex = -1;
    constructor(data: any) {
        this.category = data.category;
        this.type = data.type;
        this.difficulty = data.difficulty;
        this.question = data.question;
        this.correct_answer = data.correct_answer;
        this.answers = data.incorrect_answers;
        this.answers.push(data.correct_answer);
        this.answers.sort();
        this.responded = false;
        this.correct = false;
    }

    shuffle(array: Array<String>): Array<String> {
        let m = array.length, t, i;
        // While there remain elements to shuffle
        while (m) {
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
        return array;
      }
}
