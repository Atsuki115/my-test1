const quiz = [
  {
   question: 'ゲーム史上、最も売れたゲーム機はどれ？',
    answers: ['スーファミ','プレステ2','Switch','DS'],
    correct: 'DS'
  }, {
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: ['MOTHER2','スーパーマリオブラザーズ3','スーパードンキーコング','星のカービィ'],
    correct:'MOTHER2'
  }, {
    question:'ファイナルファンタジーⅣの主人公の名前は？' ,
    answers: ['フリオニール','クラウド','ティーダ','セシル'],
    correct:'セシル'
  }
];

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;



const quizLength = $quiz.length;
let quizIndex = 0;
let score = 0;























const clickHandler =() => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;
   }else{
    window.alert('不正解');
   }
   clickHandler();

   quizIndex++;
  if(quizIndex < quizLength){
      setupQuizuiz();
    }else{
    window.alert('終了！あなたのスコアは'+ score + '/' + quizLength + 'です！');
    }
};

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[questionIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();


//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while[answersIndex].addEventListener('click',(e) =>{
 clickHandler(e);
 handlerIndex++;
});
