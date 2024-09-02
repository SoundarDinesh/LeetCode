function moveDisks(n) {
    let discs = [];
    for(i =0; i < n ; i++) {
        discs.push(i+1);
    }

    moveDisksRecursive(discs, 1, 3);
}

function moveDisksRecursive(discs, start, end) {
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

    moveDisksRecursive(discs.slice(0, discs.length -1), start, intermediary);
    moveDisksRecursive([discs[discs.length - 1]], start, end);
    moveDisksRecursive(discs.slice(0, discs.length -1), intermediary, end);
}

moveDisks(4);