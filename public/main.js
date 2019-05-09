let h1 = {
  name: "Paradise",
  pool: true,
  capacity: 60,
  booked: 10,
  roomTypes: ["single", "double", "suite"]
};

let h = document.getElementById("hotel");
h.textContent = h1.name;

let r = document.getElementById("capacity");
r.textContent = h1.capacity;

let b = document.getElementById("booked");
b.textContent = h1.booked;

let p = document.getElementById("pool");
p.textContent = h1.pool;

let rT = document.getElementById("roomTypes");
rT.textContent = h1.roomTypes;

function bookRoom() {
  let update = document.getElementById("booked");
  update.textContent = ++h1.booked;
  if (h1.booked >= h1.capacity) {
    alert("MAX OCCUPANCY REACHED");
    window.setTimeout(function() {
      window.location.reload();
    }, 3000);
  }
}
function cancelRoom() {
  let can = document.getElementById("booked");
  can.textContent = --h1.booked;
  if (h1.booked <= 0) {
    document.getElementById("booked").style.color = "red";
  } else if (h1.booked > 0) {
    document.getElementById("Booked").style.color = "green";
  }
}
