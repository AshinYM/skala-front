function startGame() {
  const computerNum = Math.floor(Math.random() * 50) + 1;
  const guessHistory = [];
  let count = 0;

  console.log("이번 판 컴퓨터의 비밀 숫자: " + computerNum);

  // 정답을 맞히거나 사용자가 취소할 때까지 반복
  while (true) {
    const input = prompt(
      "1부터 50 사이의 숫자 중 컴퓨터가 생각한 숫자는 무엇일까요?",
    );

    // 취소 버튼을 누른 경우
    if (input === null) {
      alert("게임이 취소되었습니다.");
      break;
    }

    const userGuess = Number(input);

    // 입력값 검사
    if (!Number.isInteger(userGuess) || userGuess < 1 || userGuess > 50) {
      alert("⚠️ 1부터 50 사이의 정수를 입력해 주세요.");
      continue;
    }

    count++;
    guessHistory.push(userGuess);

    // 정답 검사
    if (userGuess === computerNum) {
      let historyMessage = "";

      // 입력했던 숫자를 순서대로 출력
      for (let i = 0; i < guessHistory.length; i++) {
        historyMessage += i + 1 + "회: " + guessHistory[i] + "\n";
      }

      alert(
        "🎉 정답입니다! 축하합니다!\n" +
          "👉 도전 횟수: " +
          count +
          "번\n\n" +
          "📋 입력 기록\n" +
          historyMessage,
      );

      break;
    }

    let hintMessage = "";

    // 세 번째 오답에 힌트 문장 추가
    if (count === 3) {
      const minHint = Math.max(1, computerNum - 5);
      const maxHint = Math.min(50, computerNum + 5);

      hintMessage =
        "\n\n💡 힌트: 정답은 " +
        minHint +
        "부터 " +
        maxHint +
        " 사이에 있습니다.";
    }

    let historyMessage = "";

    // 지금까지 입력한 숫자를 한 줄로 만들기
    for (let i = 0; i < guessHistory.length; i++) {
      historyMessage += guessHistory[i];

      if (i < guessHistory.length - 1) {
        historyMessage += ", ";
      }
    }

    // Up & Down 안내
    if (userGuess > computerNum) {
      alert(
        "🔽 Down! 더 작은 숫자를 입력해 보세요.\n" +
          "현재 " +
          count +
          "회 도전 중\n" +
          "입력 기록: " +
          historyMessage +
          hintMessage,
      );
    } else {
      alert(
        "🔼 Up! 더 큰 숫자를 입력해 보세요.\n" +
          "현재 " +
          count +
          "회 도전 중\n" +
          "입력 기록: " +
          historyMessage +
          hintMessage,
      );
    }
  }
}
