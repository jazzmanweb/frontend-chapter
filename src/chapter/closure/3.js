function outer(outParam) {
    let outVar = 2;

    function inner(inParam) {
        let inVar = 4;
        console.log(`${outParam} + ${outVar} + ${inParam} + ${inVar} = ${outParam + outVar + inParam + inVar}`);
    }

    return inner;
}

const fn1 = outer(1);

fn1(3);

/*
// ------------------------

// global
// outer: f()
// fn1: g() [[scope]] <- outVar, outParam  <-┐
                                             |
outer(1)                                     |
                                             |
// LVE                                       |
// outVar: 2 // -----------------------------┤
// outParam: 1 // ---------------------------┤
// inner: g()                                |
                                             |
return g ------------------------------------┘

// LVE
// inParam: 3
// inVar: 4
*/


