function solution(name, yearning, photo) {
    var answer = Array.from({ length: photo.length }, () => 0);
    photo.forEach((data, index) => {
        name.forEach((name, nameIndex) => {
            if (data.includes(name)) {
                answer[index] += yearning[nameIndex];
            }
        })
    })
    return answer;
}