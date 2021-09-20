function outer(outParam) {
    let outVar = 2;

    function inner(inParam) {
        let inVar = 4;
        console.log(`${outParam} + ${outVar} + ${inParam} + ${inVar} = ${outParam + outVar + inParam + inVar}`);
    }

    inner(3);
}

outer(1);

// -------------------------------

// global
// outer: f()


// // LVE: outer
// // outParam: 1
// // outVar: 2
// // inner: g()

{
    // // // LVE: inner
    // // // inParam: 3
    // // // inVar: 4

}
