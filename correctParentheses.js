function solution(s) {
    let data = [];
    const sSplit = s.split("");
    for (let i = 0; i < sSplit.length; i++) {
        if (sSplit[i] == '(') {
            data.push(`(`)
        } else {
            if (!data.pop()) {
                return false;
            }
        }
    }
    return data.length == 0;
}