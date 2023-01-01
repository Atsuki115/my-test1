const quiz = [
  {
   question: 'ゲーム史上、最も売れたゲーム機はどれ？',
    answers: ['スーファミ','プレステ2','Switch','DS'],
    correct: 'DS' 
  },{
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: ['MOTHER2','スーパーマリオブラザーズ3','スーパードンキーコング','星のカービィ'],
    correct:'MOTHER2'
  },{
    question:'ファイナルファンタジーⅣの主人公の名前は？' ,
    answers: ['フリオニール','クラウド','ティーダ','セシル'],
    correct:'セシル'
  }
];

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const quizLength = quiz.length;
let quizCount = 0;
let score = 0;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizCount].question;

  let buttonLength = $button.length;
  let buttonIndex = 0;
 
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizCount].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler =(e) => {
  if(quiz[quizCount].correct === e.target.textContent){
    window.alert('正解');
    score++;
   }else{
    window.alert('不正解');
   }
   goToNext();
  };

const goToNext = () =>{
  quizCount++;
  if(quizCount < quizLength){
    setupQuiz(quizCount);
  }else{
  window.alert('終了！あなたのスコアは'+ score + '/' + quizLength + 'です！');
  }
};

//ボタンをクリックしたら正誤判定
let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
 $button[answersIndex].addEventListener('click',(e) =>{
 clickHandler(e);
});
answersIndex++;
};