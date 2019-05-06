let h1 = {
  name: "Paradise",
  rooms: 60,
  booked: 52,
  pool: true,
  roomTypes: ["single", "double", "suite"],
  checkAvailability: function() {
    return this.rooms - this.booked;
  }
};
console.log(h1.checkAvailability());

let h = document.getElementById("hotel");
h.textContent = h1.name;

let r = document.getElementById("rooms");
r.textContent = h1.rooms;

let b = document.getElementById("booked");
b.textContent = h1.booked;

let p = document.getElementById("pool");
p.textContent = h1.pool;

let rT = document.getElementById("roomTypes");
rT.textContent = h1.roomTypes;

let c = document.getElementById("avail");
c.textContent = h1.checkAvailability();

//onClick function
function bookRoom() {
  let update = document.getElementById("booked");
  update.textContent = ++h1.booked;
}
function cancelRoom() {
  let update = document.getElementById("booked");
  update.textContent = --h1.booked;
}
