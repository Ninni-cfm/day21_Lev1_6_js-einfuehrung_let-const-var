/*
	In dieser Übung werden wir den Unterschied zwischen let, const und var lernen.
*/

/*
	* Deklariere die Variable var z mit dem Wert 34.
	* Überschreibe z anschliessend mit dem Wert 67.
	* Gib den Wert von z in der Konsole aus.
	* Danach kommentiere deinen Code aus.
*/
// var z = 34;
// //z = 67;
// var z = 67;
// console.log(z);
// z ist eine Variable, deren Wert sich aendern laesst.
// Durch die Verwendung von var laesst sich z redefinieren.



/*
* Deklariere die Variable let x mit dem Wert 34.
* Überschreibe x anschliessend mit dem Wert 67.
* Gib den Wert x in der Konsole aus.
* Danach kommentiere deinen Code aus.
*/
// let x = 34;
// //x = 67;
// let x = 67;
// console.log(x);
// x ist eine Variable, deren Wert sich aendern laesst.
// Durch die Verwendung von let laesst sich x NICHT redefinieren (Uncaught SyntaxError: Identifier 'x' has already been declared)

/*
	* Deklariere die Variable const y mit dem Wert 34.
	* Überschreibe y anschliessend mit dem Wert 67.
	* Gib den Wert y in der Konsole aus.
	* Danach kommentiere deinen Code aus.
*/
// const y = 34;
// y = 67;
// console.log(y);
// y ist eine Konstante, deren Wert sich NICHT aendern laesst (Uncaught TypeError: Assignment to constant variable)
