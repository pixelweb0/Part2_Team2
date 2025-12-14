const $operator = document.querySelector(".operator"); // 연산자 표시 input
const $result = document.querySelector(".result"); // 결과 input

const $numbers = document.querySelectorAll(".number"); // 숫자들
const $calculations = document.querySelectorAll(".calculation"); //계산 및 연산자

let numOne = "";
let numTwo = "";
let operator = "";
let resultValue = "";

// C버튼 초기화 사용할 clearAll
const clearAll = () => {
  numOne = "";
  numTwo = "";
  operator = "";
  resultValue = "";

  $result.value = "";
  $operator.value = "";
};

const handlenumberClick = (e) => {
  const number = e.target.dataset.value;

  if (operator === "") {
    numOne += number;
    $result.value = numOne;
  } else {
    numTwo += number;
    $result.value = numTwo;
  }
};

$numbers.forEach((btn) => {
  btn.addEventListener("click", handlenumberClick);
});

const handleOperatorClick = (e) => {
  const clickedOperator = e.target.dataset.value;

  if (clickedOperator === "c") {
    clearAll();
    return;
  }

  if (["+", "-", "/", "x"].includes(clickedOperator)) {
    $operator.value = clickedOperator;
    // numOne이 있고, 이미 연산자가 선택되어 있는데 또 다른 연산자를 누르면,
    // 현재까지의 계산을 먼저 수행합니다. (ex: 3 + 3, 여기서 +를 또 누르면 6을 만듦)
    if (numOne !== "" && operator !== "" && numTwo === "") {
      operator = clickedOperator;
      return;
    }
    // numone이 없다면 연산자 눌러도 무시
    if (numOne === "") {
      return;
    }
    if (numOne !== "" && operator !== "" && numTwo !== "") {
      calculateAndSetNumOne();
    }

    // 새로운 연산자 설정 및 numTwo 초기화
    operator = clickedOperator;
    numTwo = "";
  } // = 버튼 클릭시 else if
  else if (clickedOperator === "=") {
    if (numOne === "" || operator === "" || numTwo === "") {
      return;
    }
    calculateAndSetNumOne();

    // 최종 결과 후 상태 정리: 다음 계산을 위해 numOne을 제외한 모든 상태 초기화
    operator = "";
    numTwo = "";
    $operator.value = "";
  }
};

$calculations.forEach((btn) => {
  btn.addEventListener("click", handleOperatorClick);
});

const calculateAndSetNumOne = () => {
  let calculatedResult;
  const n1 = Number(numOne);
  const n2 = Number(numTwo);

  switch (operator) {
    case "+":
      calculatedResult = n1 + n2;
      break;
    case "-":
      calculatedResult = n1 - n2;
      break;
    case "x":
      calculatedResult = n1 * n2;
      break;
    case "/":
      // 0으로 나누는 경우 예외 처리
      if (n2 === 0) {
        clearAll();
        $result.value = "Error";
        return;
      }
      calculatedResult = n1 / n2;
      break;
    default:
      return;
  }

  // 결과를 문자열로 변환하여 numOne에 저장 (다음 계산의 첫 번째 숫자가 됨)
  numOne = String(calculatedResult);
  // 결과창에 표시
  $result.value = numOne;

  // 계산 후 numTwo는 초기화됩니다.
  numTwo = "";
  resultValue = numOne; // 최종 계산 결과 저장
};
