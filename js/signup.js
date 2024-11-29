// DOM 요소 가져오기
const signupForm = document.getElementById("signupForm");
const signupButton = document.getElementById("signupButton");
const errorMessage = document.getElementById("errorMessage");

// 입력 필드 배열
const signupFields = [
  document.getElementById("signupName"),
  document.getElementById("signupEmail"),
  document.getElementById("signupPassword"),
];

// 입력 필드 검증 함수
function validateSignupFields() {
  // 모든 필드가 비어있지 않은지 확인
  const allFilled = signupFields.every((field) => field.value.trim() !== "");

  if (allFilled) {
    signupButton.disabled = false; // 버튼 활성화
    errorMessage.style.display = "none"; // 에러 메시지 숨김
  } else {
    signupButton.disabled = true; // 버튼 비활성화
    errorMessage.style.display = "block"; // 에러 메시지 표시
  }
}

// 각 입력 필드에 입력 이벤트 리스너 추가
signupFields.forEach((field) => {
  field.addEventListener("input", validateSignupFields);
});

// 폼 제출 이벤트 핸들러
signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // 기본 동작 막기

  if (signupButton.disabled) {
    errorMessage.style.display = "block"; // 입력 요청 메시지 표시
    return;
  }

  alert("회원가입 완료!");
});
