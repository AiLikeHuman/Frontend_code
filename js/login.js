// Google 로그인 초기화
window.onload = function () {
    google.accounts.id.initialize({
      client_id: "364429955199-695f6b9h5iisdggbfvpkmecdo854r3vq.apps.googleusercontent.com", // Google Cloud Console에서 발급받은 클라이언트 ID
      callback: handleGoogleLogin,
    });
  
    google.accounts.id.renderButton(
      document.getElementById("google-login"), // 구글 로그인 버튼 요소
      {
        theme: "outline",
        size: "large",
        text: "continue_with",
      }
    );
  };
  
  // Google 로그인 콜백
  function handleGoogleLogin(response) {
    console.log("Google Login JWT: ", response.credential);
    alert("구글 로그인 성공!");
  }
  
  // 카카오 SDK 초기화
  if (typeof Kakao !== "undefined") {
    Kakao.init("0b5810db2b2f0f990869d0c6282aa3ab"); // 카카오 개발자 콘솔에서 발급받은 JavaScript 키
  }
  
  // 카카오 로그인 버튼 동작
  document.getElementById("kakao-login").addEventListener("click", function () {
    if (!Kakao.isInitialized()) {
      alert("카카오 SDK 초기화 실패");
      return;
    }
  
    Kakao.Auth.login({
      success: function (authObj) {
        console.log("카카오 로그인 성공: ", authObj);
        alert("카카오 로그인 성공!");
      },
      fail: function (err) {
        console.error("카카오 로그인 실패: ", err);
        alert("카카오 로그인 실패!");
      },
    });
  });
  