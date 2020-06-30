function fn(unusedVariable, usedVariable) {
    console.log(usedVariable);
}

const vars = ['var1', 'var2'];

// Arguments from this function will be removed via tree shake,
// even though second argument is being used by the function
fn();

// This function will not change and works as expected
fn(vars[0], vars[1]);
