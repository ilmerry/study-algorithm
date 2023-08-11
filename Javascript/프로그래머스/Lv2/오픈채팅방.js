function solution(records) {
  var answer = [];
  let user = {};

  records.map((record) => {
    const [state, uid, nickname] = record.split(" ");

    switch (state) {
      case "Enter":
        answer.push(`${uid}님이 들어왔습니다.`);
        user[uid] = nickname;
        break;
      case "Leave":
        answer.push(`${uid}님이 나갔습니다.`);
        break;
      case "Change":
        user[uid] = nickname;
        break;
    }
  });

  return answer.map((msg) => {
    const [uid, stateMsg] = msg.split("님");
    return user[uid] + "님" + stateMsg;
  });
}
