import './assets/style/style.scss';
import { QuizController } from './controller/quiz-controller.';
import { quizData } from './data/quiz.data';

const controller = new QuizController(quizData);
controller.showApp();