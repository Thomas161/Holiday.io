let hotel = new Object(name, rooms, booked, pool, roomTypes);

let h1 = new hotel("Paradise", 60, 30, true, ["single", "double", "suite"]);
let h2 = new hotel("Seasons", 100, 54, true, ["single", "double", "suite"]);
let h3 = new hotel("Inn", 30, 5, false, ["single", "double"]);

const t = function checkAvailability(h1) {
  return h1.rooms - h1.booked;
};
console.log(t);
