  function checkGrade() {
      // 과목명이 담긴 배열
      var subjects = ["HTML", "CSS", "JavaScript"];

      // 과목별 점수를 저장할 배열
      var scores = [];

      // 총점을 저장할 변수
      var total = 0;

      // 배열의 길이만큼 반복
      for (var i = 0; i < subjects.length; i++) {
          var input = prompt(
              subjects[i] + " 점수를 입력해 주세요. (0 ~ 100)"
          );

          // 취소 버튼을 누른 경우
          if (input === null) {
              alert("성적 계산이 취소되었습니다.");
              return;
          }

          var score = Number(input);

          // 빈칸, 숫자가 아닌 값, 범위를 벗어난 값 검사
          if (
              input.trim() === "" ||
              !Number.isFinite(score) ||
              score < 0 ||
              score > 100
          ) {
              alert(
                  "⚠️ " + subjects[i] +
                  " 점수는 0부터 100 사이의 숫자로 입력해 주세요."
              );

              i--; // 현재 과목을 다시 입력받기
              continue;
          }

          scores.push(score);
          total = total + score;
      }

      // 평균 계산
      var average = total / subjects.length;

      // 최고 점수와 최고 점수 과목 찾기
      var highestScore = scores[0];
      var highestSubject = subjects[0];

      for (var i = 1; i < scores.length; i++) {
          if (scores[i] > highestScore) {
              highestScore = scores[i];
              highestSubject = subjects[i];
          }
      }

      // 평균 점수에 따른 결과 판정
      var result = "";

      if (average >= 90) {
          result = "🏆 합격입니다! 매우 우수한 성적입니다.";
      } else if (average >= 80) {
          result = "🎉 합격입니다! 우수한 성적입니다.";
      } else if (average >= 60) {
          result = "✅ 합격입니다! 꾸준히 노력해 주세요.";
      } else {
          result = "❌ 불합격입니다. 다음 기회에 힘내세요!";
      }

      // 과목별 점수표 만들기
      var scoreMessage = "";

      for (var i = 0; i < subjects.length; i++) {
          scoreMessage +=
              "• " + subjects[i] + ": " + scores[i] + "점\n";
      }

      // 최종 결과 출력
      alert(
          "====== 📊 나의 성적표 ======\n\n" +
          scoreMessage +
          "---------------------------\n" +
          "• 총점: " + total + "점\n" +
          "• 평균: " + average.toFixed(1) + "점\n" +
          "• 최고 과목: " + highestSubject +
          " (" + highestScore + "점)\n" +
          "---------------------------\n" +
          "• 결과: " + result
      );
  }