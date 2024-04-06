function solution(v) {
    return v.reduce(([xMap, yMap], [x, y]) => [
        { ...xMap, [x]: (xMap[x] || 0) + 1 },
        { ...yMap, [y]: (yMap[y] || 0) + 1 }
    ], [{}, {}])
        .map(map => parseInt(Object.keys(map).find(key => map[key] === 1)));
}
