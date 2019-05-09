let h1 = {
  name: "Paradise",
  capacity: 60,
  booked: 50,
  roomTypes: ["single", "double", "suite"]
};

let h = document.getElementById("hotel");
h.textContent = h1.name;

let r = document.getElementById("capacity");
r.textContent = h1.capacity;

let b = document.getElementById("booked");
b.textContent = h1.booked;

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
    alert("WE COMPLETELY OPEN");
    window.location.reload();
  }
}

let h2 = {
  name: "The Villa",
  capacity: 40,
  booked: 36,
  roomTypes: ["single", "double", "suite"]
};

let hbo = document.getElementById("hotel2");
hbo.textContent = h2.name;

let r2 = document.getElementById("capacity2");
r2.textContent = h2.capacity;

let b2 = document.getElementById("booked2");
b2.textContent = h2.booked;

let rT2 = document.getElementById("roomTypes2");
rT2.textContent = h2.roomTypes;

function bookRoom2() {
  let update = document.getElementById("booked2");
  update.textContent = ++h2.booked;
  if (h2.booked >= h2.capacity) {
    alert("MAX OCCUPANCY REACHED");
    window.setTimeout(function() {
      window.location.reload();
    }, 3000);
  }
}
function cancelRoom2() {
  let can = document.getElementById("booked2");
  can.textContent = --h2.booked;
  if (h2.booked <= 0) {
    document.getElementById("booked2").style.color = "red";
    alert("WE COMPLETELY OPEN");
    window.location.reload();
  }
}
