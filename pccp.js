function solution(bandage, health, attacks) {
    let beforeAttack = 1;
    const init = health;

    for (let i = 0; i < attacks.length; i++) {
        const didSuccess = (attacks[i][0] - beforeAttack);

        if (didSuccess >= bandage[0]) {
            health += bandage[2]
        }

        if (health + didSuccess * bandage[1] < init) {
            health += didSuccess * bandage[1];
        } else {
            health = init;
        }

        health -= attacks[i][1];
        beforeAttack = attacks[i][0] + 1;
        if (health <= 0) {
            health = -1;
            break;
        }
    }
    return health;
}

