const quiz = [
  {
    question: '江戸幕府を開いた人物は次のうちどれ？',
    answers: ['聖徳太子','織田信長','千利休','徳川家康'],
    correct: '徳川家康'
  },
  {
    question: '学問の神様は次のうちどれ？',
    answers: ['鑑真','ペリー','菅原道真','伊藤博文'],
    correct: '菅原道真'
  },
  {
    question: 'イワシの漢字は次のうちどれ？',
    answers: ['鰯','鯖','鮪','鮫'],
    correct: '鰯'
  },
  {
    question: '千葉県の県庁所在地は次のうちどれ？',
    answers: ['船橋市','柏市','成田市','千葉市'],
    correct: '千葉市'
  },
  {
    question: '世界一高い山はは次のうちどれ？',
    answers: ['K2','エベレスト','富士山','キリマンジャロ'],
    correct: 'エベレスト'
  },
  {
    question: 'ギリシャ神話に登場しない神様は次のうちどれ？',
    answers: ['ゼウス','アテネ','ヴィーナス','クロムハーツ'],
    correct: 'クロムハーツ'
  },
  {
    question: '１００m世界記録保持者は次のうちどれ？',
    answers: ['ジャスティンビーバー','ウサイン・ボルト','武井壮','タイソンゲイ'],
    correct: 'ウサイン・ボルト'
  }
];

const quizLength = quiz.length;
let j = 0;
let score = 0;



const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[j].question;
  let i = 0;
  for (let i = 0; i < buttonLength; i++) {
    $button[i].textContent = quiz[j].answers[i];
  }
};

setupQuiz();

// 正誤判定
const clickHandler = (e) => {
  if (quiz[j].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

j++;
if (j < quizLength) {
  setupQuiz();
} else {
  window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');

}

};


let k = 0;
for (let k = 0; k < buttonLength; k++) {
  $button[k].addEventListener('click', (e) => {
    clickHandler(e);
  });
};


