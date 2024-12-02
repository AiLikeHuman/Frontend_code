// 대화 내용 배열
const dialogues = [
  { name: "김유림", text: "안녕 난 유림이라고 해!!" },
  { name: "김유림", text: "만나서 반가워" },
  { name: "김유림", text: "같이 여행하고 싶은데.. 괜찮아?" },
  {
    name: "김유림",
    text: "고마워!! 같이 돌아다니면서 여행하자 . 나 여기 잘 아니까 마음껏 물어봐 !",
  },
];

// 대화박스를 업데이트하는 함수
function updateChatBox() {
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML = ""; // 기존 대화 내용 초기화

  dialogues.forEach((dialogue) => {
    const dialogueBox = document.createElement("div");
    dialogueBox.classList.add("dialogue-box");

    const dialogueName = document.createElement("div");
    dialogueName.classList.add("dialogue-name");
    dialogueName.textContent = dialogue.name;

    const dialogueText = document.createElement("p");
    dialogueText.classList.add("dialogue-text");
    dialogueText.textContent = dialogue.text;

    dialogueBox.appendChild(dialogueName);
    dialogueBox.appendChild(dialogueText);
    chatBox.appendChild(dialogueBox);
  });
}

// 메시지 전송 함수
function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  const newMessage = messageInput.value.trim();

  if (newMessage) {
    dialogues.push({ name: "나", text: newMessage });
    messageInput.value = ""; // 입력창 초기화
    updateChatBox(); // 채팅 내용 업데이트
  }
}

// 페이지 로드 시 대화 박스 초기화
window.onload = updateChatBox;
