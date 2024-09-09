function moveDiscs(n) {
    let discs = [];
    for(i =0; i < n ; i++) {
        discs.push(i+1);
    }

    moveDiscsRecursive(discs, 1, 3);
}

function moveDiscsRecursive(discs, start, end) {
    if(discs.length === 1) {
        console.log(`move disk ${discs[0]} from ${start} to ${end}`);
        return;
    }

    let intermediary = 0;
    for(let i =1; i <=3; i++) {
        if(i !=start && i!=end ) {
            intermediary = i;
            break;
        }
    }

    moveDiscsRecursive(discs.slice(0, discs.length -1), start, intermediary);
    moveDiscsRecursive([discs[discs.length - 1]], start, end);
    moveDiscsRecursive(discs.slice(0, discs.length -1), intermediary, end);
}

moveDiscs(4);
