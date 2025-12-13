// 제가 코딩 한 계산기 파일입니다.

document.addEventListener("DOMContentLoaded", () => {
    const operatiorInput = document.querySelector(".operator");
    const resultInput = document.querySelector(".result");
    const buttons = document.querySelectorAll(".calculator button");


    let firstValue = ""; // 첫번째 숫자
    let operator = ""; // 연산자
    let secondValue = ""; // 두번째 숫자

    // 모든 버튼에 이벤트 추가
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const value = btn.dataset.value;
            
            // 숫자
            if (btn.classList.contains("number")) {
                if (!operator) {
                    firstValue += value;
                    resultInput.value = firstValue;
                }
                else {
                    secondValue += value;
                    resultInput.value = secondValue;
                }
                return;
            }
            // Clear 기능
            if (value === "c") {
                firstValue = "";
                secondValue = "";
                operator = "";
                operatiorInput.value = "";
                resultInput.value = "";
                return;
            }

            // 연산자 
            if (["+", "-", "/", "x"].includes(value)) {
                operator = value === "x" ? "*" : value; 
                operatiorInput.value = value;
                return;
            }

            // 계산 실행
            if (value === "=") {
                if (firstValue && operator && secondValue) {
                    const result = eval(`${firstValue}${operator}${secondValue}`);
                    // 저는 eval을 썼지만 실무에서는 사용하는걸 지양한다고 합니다. 관련해서는 찾아보시면 될것같습니다.

                    resultInput.value = result;

                    firstValue = result;
                    secondValue = "";
                    operator = "";
                    operatiorInput.value = "";
                }
            }
        });
    });
});