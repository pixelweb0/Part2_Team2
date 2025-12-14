const wordList = [
  "JAVASCRIPT",
  "PROGRAMMING",
  "COMPUTER",
  "DEVELOPER",
  "HANGMAN",
  "WEBSITE",
  "CODING",
];
let secretWord = "";
let guessedState = [];
let guessedLetters = new Set();
let attemptsLeft = 0;

// DOM 요소 가져오기
const wordDisplay = document.getElementById("word-display"); // _ _ _ 단어갯수
const feedbackMessage = document.getElementById("feedback-message"); //피드백메시지
const guessInput = document.getElementById("guess-input"); //알파벳입력input
const guessButton = document.getElementById("guess-button"); //추측하기버튼
const restartButton = document.getElementById("restart-button"); // 재시작버튼
const attemptsLeftSpan = document.querySelector("#attempts-left span"); //남은 기회
const guessedLettersSpan = document.querySelector("#guessed-letters span"); //이미 추측한 문자:

// 게임 초기화 함수
function initializeGame() {
  secretWord = wordList[Math.floor(Math.random() * wordList.length)];
  guessedState = Array(secretWord.length).fill("_");
  guessedLetters = new Set();
  attemptsLeft = 6;

  wordDisplay.textContent = guessedState.join(" ");
  feedbackMessage.textContent = "";
  guessInput.value = "";
  guessInput.disabled = false;
  guessButton.disabled = false;
  restartButton.style.display = "none";

  updateDisplay();
}

// 화면 업데이트 함수
function updateDisplay() {
  wordDisplay.textContent = guessedState.join(" ");
  attemptsLeftSpan.textContent = attemptsLeft;
  guessedLettersSpan.textContent =
    guessedLetters.size > 0 ? Array.from(guessedLetters).join(", ") : "없음";

  // 조건 1.
  // 1-1. 남은 기회를 모두 소진시 게임종료와 정답을 알려주는 피드백메시지(`💀 게임 오버! 정답은 '${secretWord}'였습니다.`)를 출력하고,
  // 1-2. secretWord를 모두 맞췄을때 `🎉 축하합니다! 단어 '${secretWord}'를 맞히셨습니다!`를 출력해주세요. (Hint. 추측 알파벳을 모두 채우면 빈칸( _ )이 1개도 없음.)
  // (1-1과 1-2 모두 마지막에는 endGame()을 실행시켜주세요.)

  // 현재위치에 조건 1 코드 작성해주세요.

  // 게임 종료 처리
  function endGame() {
    guessInput.disabled = true;
    guessButton.disabled = true;
    restartButton.style.display = "block";
  }

  // 추측하기 버튼 클릭 이벤트
  guessButton.addEventListener("click", () => {
    const guess = guessInput.value.toUpperCase();
    guessInput.value = ""; // 입력창 초기화

    if (guess.length !== 1 || !/^[A-Z]$/.test(guess)) {
      feedbackMessage.textContent =
        "⚠️ 유효하지 않은 입력입니다. 알파벳 한 글자만 입력해 주세요.";
      return;
    }

    if (guessedLetters.has(guess)) {
      feedbackMessage.textContent = `🚫 이미 추측했던 문자 '${guess}'입니다. 다시 시도해 주세요.`;
      return;
    }

    guessedLetters.add(guess);

    // 조건 2.
    // 2-1. secretWord에 guess의 추측한 알파벳이 맞으면 guessedState의 빈칸( _ )을 맞춘 알파벳으로 채우며,
    // feedbackMessage에 `✅ 정답! 문자 '${guess}'가 단어에 포함되어 있습니다.`를 출력해주세요.
    // (Hint. for문으로 secretWord 길이만큼 순회하여 일치비교)

    // 2-2. secreWord에 guess의 알파벳이 일치하지 않으면 attempts값을 1씩 깎으며,
    // feedbackMessage에 `❌ 오답! 문자 '${guess}'는 단어에 없습니다.`를 출력해주세요.

    // 현재 위치에 조건 1 코드를 작성해주세요.

    updateDisplay();
  });

  // 엔터 키 입력 처리 (input 필드에서)
  guessInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      guessButton.click(); // 버튼 클릭과 동일한 효과
    }
  });

  // 다시 시작 버튼 클릭 이벤트
  restartButton.addEventListener("click", initializeGame);

  // 페이지 로드 시 게임 초기화
  initializeGame();
}
