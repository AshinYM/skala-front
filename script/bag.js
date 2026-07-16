function showMyBag() {
  // 소지품 객체가 담긴 배열
  var myBag = [
    {
      name: "여권 ✈️",
      count: 1,
    },
    {
      name: "스마트폰 📱",
      count: 2,
    },
    {
      name: "지갑 💳",
      count: 1,
    },
    {
      name: "보조 배터리 🔋",
      count: 1,
    },
  ];

  var resultText = "🎒 내 가방 속 물품 목록\n" + "-----------------------\n";

  var totalCount = 0;

  // 소지품 객체를 반복해서 출력
  for (var i = 0; i < myBag.length; i++) {
    resultText += "• " + myBag[i].name + ": " + myBag[i].count + "개\n";

    totalCount += myBag[i].count;
  }

  resultText +=
    "-----------------------\n" +
    "물품 종류: " +
    myBag.length +
    "가지\n" +
    "전체 수량: " +
    totalCount +
    "개";

  alert(resultText);
}
