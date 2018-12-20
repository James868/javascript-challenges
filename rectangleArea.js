/*
Find the area of a rectangle when provided with one diagonal and one side of the rectangle. If the input diagonal is less than or equal to the length of the side, return "Not a rectangle". If the resultant area has decimals round it to two places.
*/

function area(d,l) {
	  if (d <= l) return "Not a rectangle"
	  
    const A = l * Math.sqrt((d * d) - (l * l));
    
    if (!Number.isInteger(A)) return +A.toFixed(2);
}

console.log(area(12, 5))