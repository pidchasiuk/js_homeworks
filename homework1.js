// Result: number33 -> "+" sign after str, so 3 is converted to str and result is concatenation of strings
console.log('number' + 3 + 3);

// Result: 3 -> null is used in math operation considered as 0
console.log(null + 3);

// Result: qwerty -> both parts of expression is true, so this operation checks and returns the last one
console.log(5 && "qwerty");

// Result: 42hillel -> +'40' and +'2' converts str to number and "+" between do 40+2=42, 
// but because after we have str, 42 also converted to str
console.log(+'40' + +'2' + "hillel");

// Result: false -> 10 converted to number and we have strict equality, so 5 != 6, means false
console.log('10' - 5 === 6);

// Result: 1 -> true is 1, false is 0
console.log(true + false);

// Result: NaN -> '4px' cannot be converted to number, any operation with NaN returns NaN
console.log('4px' - 3);

// Result: 1 -> '4' converts to number, usual math operation substraction
console.log('4' - 3);

// Result: 61 ->  3**0 means power of a number and = 1, and after str concatenation
console.log('6' + 3 ** 0);

// Result: 2 -> 6 converted to number and 12 devided by 6
console.log(12 / '6');

// Result: 10false -> "+" sign after str, bool result converted to str
console.log('10' + (5 === 6));

// Result: false -> in this type of equality null can be equal only to undefined, but not other types
console.log(null == '');

// Result: 27 -> 3**3 means power of a number, 3 in power 3 = 27
console.log(3 ** (9 / 3));

// Result: true -> both operands of the same bolean values
// !!'false'/!!'true' reading like not(not true) -> not false -> true (not empty str is true)
console.log(!!'false' == !!'true');

// Result: 1 -> && is higher priority, so its 1st operation and 
// its result is 1 both parts of expression is true becasue '0' is non-empty str
// 0 || 1 returns 1, because 0 considered as false
console.log(0 || '0' && 1);

// Result: false -> "+null" converts to number 0 -> (0 == false) returns true becasue false is 0 
// true is 1, means 1 < 1 which is false
console.log((+null == false) < 1);

// Result: true -> "false && true" returns false -> "false || true" returns true
console.log(false && true || true);

// Result: false -> first prio is (false || true) -> returns true 
// false && true -> returns false
console.log(false && (false || true));

// Result: false -> "+null" converts to number 0 -> (0 == false) returns true becasue false is 0 
// 1 in power 5 is 1 -> true < 1 -> 1 < 1 is false
console.log((+null == false) < 1 ** 5);