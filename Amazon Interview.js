function cellCompete(states, days) {
    let leftCell = 0;
    let rightCell = 0;

    for (let j = 1; j <= days; j++) {

        let result = [];

        for (let i = 0; i < 8; i++) {
            leftCell = (states[i - 1]);
            rightCell = (states[i + 1]);

            if ((i - 1) == -1) {
                leftCell = 0;
            } else if ((i + 1) == 8) {
                rightCell = 0;
            }
            if (leftCell == rightCell) {
                result.push(0)
            } else {
                result.push(1)
            }
        }
        states = result;
    }
    return days + "   " + states;
}
console.log(cellCompete([0, 1, 0, 1, 0, 0, 0, 0], 3));

//  Day 0                   0 1 0 1 0 0 0 0
// OUTPUT day 1 SHOULD BE : 1 0 0 0 1 0 0 0
// OUTPUT day 2 SHOULD BE : 0 1 0 1 0 1 0 0
// OUTPUT day 3 SHOULD BE:  1 0 0 0 0 0 1 0 
