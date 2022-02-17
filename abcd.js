 // This program creates a class for linear equations.
class linearEquations {
    constructor(a, b, c, d, e, f) {
        this._a = a;
        this._b = b;
        this._c = c;
        this._d = d;
        this._e = e;
        this._f = f;
    }



    get A() {
        return this._a;
    }



    get B() {
        return this._b;
    }



    get C() {
        return this._c;
    }



    get D() {
        return this._d;
    }



    get E() {
        return this._e;
    }



    get F() {
        return this._f;
    }



    get X() {
        return ((this._e * this._d) - (this._b * this._f)) / ((this._a * this._d) - (this._b * this._c)); 
    }



    get Y() {
        return ((this._a * this._f) - (this._e * this._c)) / ((this._a * this._d) - (this._b * this._c));
    }


    
    isSolvable() {
        return ((this._a * this._d) - (this._b * this._c)) != 0
    }


}



// Test function
function testCase(ar) {
    if (ar.isSolvable()) {
        console.log("x is", ar.X, "and y is", ar.Y);
    }
    else {
        console.log("The equation has no solution")
    }
    
}


// Test variables
const newCase = new linearEquations(9.0, 4.0, 3.0, -5.0, -6.0, -21.0);
const otherCase = new linearEquations(1.0, 2.0, 2.0, 4.0, 4.0, 5.0);

// Function call for test cases
testCase(newCase);
testCase(otherCase);

// Done! Bonne! 