function incGen() {
    let counter = 0;

    function increment() {
        counter++;
        console.log(`counter=${counter}`);
    }

    return increment;
}

const fn1 = incGen();
const fn2 = incGen();

fn1();
fn1();
fn2();
fn2();
fn1();
fn2();

// ------------

// global
// fn1: f() [[scope]]
// fn2: f() [[scope]]
