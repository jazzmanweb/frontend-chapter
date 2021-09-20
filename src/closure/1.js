function outer(outParam) {
    let outVar = 2;

    function inner(inParam) {
        let inVar = 4;
        console.log(`${outParam} + ${outVar} + ${inParam} + ${inVar} = ${outParam + outVar + inParam + inVar}`);
    }

    inner();
}

outer();

// global
// outer: f()

outer()

// // LVE: outer
// // outParam: undefined
// // outVar: 2
// // inner: g()

{
    // // // LVE: inner
    // // // inParam: undefined
    // // // inVar: 4

}
