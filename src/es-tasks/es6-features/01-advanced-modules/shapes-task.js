// move triangle object to triangle.js
const triangle = {
  isIsosceles(a, b, c) {
    return (a === b || b === c || a === c);
  },
  area(base, height) {
    return (base * height) / 2;
  },
};

// move square object to square.js
const square = {
  area(x) {
    return x * x;
  },
};

// move circle object to circle.js
const circle = {
  area(r) {
    return Math.PI * (r * r);
  },
  diameter(r) {
    return 2 * r;
  },
};

export function shapesTaskApp() {
// Do not edit below this line
//   console.log(isIsosceles(3, 7, 7) === true);
  console.log(triangle.area(4, 7) === 14);
  console.log(square.area(2, 2) === 4);
  console.log(circle.area(4.7) === 69.39778171779854);
  // console.log(diameter(4.7) === 9.4);
}
