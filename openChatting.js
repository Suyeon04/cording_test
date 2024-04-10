function solution(record) {
    var answer = [];
    // 1. id : 닉네임 형태의 object를 만든다
    // 2. for문을 돌려서 enter, Leave의 데이터를 push한다
    const splitRecord = record.map(n => n.split(" "));
    let nicknames = [];
    for (let i = splitRecord.length - 1; i >= 0; i--) {
        const id = splitRecord[i][1];
        const act = splitRecord[i][0];
        let nick = "";
        if (splitRecord[i].length === 3 && !nicknames.find(n => n.id == id)) {
            nick = splitRecord[i][2];
            nicknames.push({ id, nick });
        } else {
            nick = nicknames.find(n => n.id == id).nick;
        }
        if (act == "Enter") {
            answer.push(`${nick}님이 들어왔습니다.`)
        } else if (act == "Leave") {
            answer.push(`${nick}님이 나갔습니다.`)
        }
    }
    answer = answer.reverse();
    return answer;
}