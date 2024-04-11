function solution(record) {
    const nicknamesObj = {};
    const actionsArray = [];
    for (let data of record) {
        const [action, id, nick] = data.split(" ");
        if (action == "Enter" || action == "Leave") {
            actionsArray.push({ action, id });
        }
        if (action == "Enter" || action == "Change") {
            nicknamesObj[id] = nick;
        }
    }
    const answer = actionsArray.map(({ action, id }) => {
        if (action == "Enter") {
            return `${nicknamesObj[id]}님이 들어왔습니다.`;
        } else {
            return `${nicknamesObj[id]}님이 나갔습니다.`;
        }
    })
    return answer;
}
