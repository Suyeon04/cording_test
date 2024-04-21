function solution(orders, n) {
    let currentOrder = 1;
    for (let i = 0; i < orders.length; i++, currentOrder++) {
        for (let j = currentOrder; j < orders[i]; j++) {
            currentOrder++;
            n--;
            if (n < 1) {
                return j;
            }
        }
    }
    return currentOrder + n - 1;
}