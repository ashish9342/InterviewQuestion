// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
// shapeArea(n) = 5
// shapeArea(n) = 13

function shapeArea(n) {
 return ((n * n)+((n-1) * (n-1)));
}
