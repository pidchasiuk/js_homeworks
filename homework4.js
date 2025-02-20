function checkProbabilityTheory(count){
    const min = 100;
    const max = 1000;
    let randomArr = [];

    for (let i = 1; i <= count; i++) {
        let tempVar = Math.random() * (max - min) + min;
        randomArr.push(tempVar.toFixed(0));
    }
    console.log(`Random array with length ${count} is: ${randomArr}`)

    let evenCounter = 0;
    let oddCounter = 0;
    for (let i = 1; i <= count; i++) {
        if (randomArr[i] % 2 == 0) {
            evenCounter++;
        } else {
            oddCounter++;
        }
    }
    console.log(`Count of even elements: ${evenCounter}`);
    console.log(`Count of odd elements: ${oddCounter}`);

    let evenPercent = (evenCounter * 100 / count).toFixed(0);
    let oddPercent = (oddCounter * 100 / count).toFixed(0);
    console.log(`Percent event to odd ${evenPercent} % ${oddPercent}`);
}

checkProbabilityTheory(27);