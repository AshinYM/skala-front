function startGame() {
    const computerNum = Math.floor(Math.random() * 50) + 1;
    let count = 0;

    console.log("이번 판 컴퓨터의 비밀 숫자: " + computerNum);

    while (true) {
        const input = prompt(
            "1부터 50 사이의 숫자 중 컴퓨터가 생각한 숫자는 무엇일까요?"
        );

        if (input === null) {
            alert("게임이 취소되었습니다.");
            break;
        }

        const userGuess = Number(input);

        if (
            !Number.isInteger(userGuess) ||
            userGuess < 1 ||
            userGuess > 50
        ) {
            alert("⚠️ 1부터 50 사이의 정수를 입력해 주세요.");
            continue;
        }

        count++;

        if (userGuess === computerNum) {
            alert(
                "🎉 정답입니다! 축하합니다!\n" +
                "👉 도전 횟수: " + count + "번 만에 맞추셨습니다."
            );
            break;
        } else if (userGuess > computerNum) {
            alert(
                "🔽 Down! 더 작은 숫자를 입력해 보세요. " +
                "(현재 " + count + "회 도전 중)"
            );
        } else {
            alert(
                "🔼 Up! 더 큰 숫자를 입력해 보세요. " +
                "(현재 " + count + "회 도전 중)"
            );
        }
    }
}