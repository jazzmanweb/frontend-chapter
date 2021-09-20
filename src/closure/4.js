function incGen() {
    let counter = 0;

    function increment() {
        counter++;
        console.log(`counter=${counter}`);
    }

    return increment;
}

// global
// fn1: f() [[scope]] <- counter

const fn1 = incGen();

fn1();
fn1();
fn1();
fn1();
