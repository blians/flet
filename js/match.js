var main = document.getElementById("main");
function dateFormat(date) {
  return `${new Date(date).getDate()}-${
    new Date(date).getMonth() + 1
  }-${new Date(date).getFullYear()} at ${
    new Date(date).getHours() >= 12
      ? new Date(date).getHours() - 12
      : new Date(date).getHours()
  }:${
    new Date(date).getMinutes() < 10
      ? "0" + new Date(date).getMinutes()
      : new Date(date).getMinutes()
  } ${new Date(date).getHours() >= 12 ? "PM" : "AM"}`;
}
var match_data = [];

function match() {
  match_data = []
  profile_Data.h_array.forEach((n) => {
    match_data.push({
      title: n[0],
      prize: n[1],
      date: n[2],
      type: n[3],
      id: n[4],
      room: n[5],
    });
  });
  var match_html = `
  <div class="title">
  MY MATCHES
  </div>
  <div class="container mt-4" style="margin-bottom: 107px">
  `;
  match_data.forEach((e, i) => {
    var second = "";
    if (e.type == 0) {
      second = `<div class="room-prize-details">
            <button onclick="roomCrad(${i})"><i
                class="bi bi-door-open-fill"></i>
              Room Details</button>
          </div>`;
    } else if (e.type == 1) {
      second = `<p style="font-weight:bold;color: white;background-color: green;padding: 3px 10px;">pending</p>`;
    } else if (e.type == 2) {
      second = `<p style="font-weight:bold;color: white;background-color: green;padding: 3px 10px;">Paid✅</p>`;
    } else if (e.type == 3) {
      second = `<p style="font-weight:bold;color: white;background-color: red;padding: 3px 10px;">Cheating Detect ❗</p`;
    } else if (e.type == 4) {
      second = `<p style="font-weight:bold;color: white;background-color: red;padding: 3px 10px;">Absent ❌</p`;
    } else if (e.type == 5) {
      second = `<p style="font-weight:bold;color: white;background-color: red;padding: 3px 10px;">Money Back 😊</p`;
    } else {
      second = `<p style="font-weight:bold;color: white;background-color: red;padding: 3px 10px;">Contract US</p`;
    }

    match_html += `
  <div class="card" style="display: flex;margin-bottom: 9px"><div class="d-flex align-items-center justify-content-between">
      <div class="m-2 ">${i + 1}</div>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <h5 class="card-title text-success font-weight-bold m-0">${
            e.title
          }</h5>
          <div class="bg-dark text-white rounded px-2 py-1">TK ${e.prize}</div>
        </div>
        <div class="d-flex justify-content-between">
          <p class="card-text text-muted m-0" style="font-size: 0.8rem;">${dateFormat(
            e.date
          )}</p>
          <div>#${e.id}</div>

        </div>
        <div class="d-flex justify-content-between">
          <p class="card-text text-dark">Won Amount: ${e.prize} TK</p>
          ${second}
        </div>
      </div>


    </div></div>`;
  });

  main.innerHTML = match_html + `</div>`;
}

function roomCrad(i) {
  document.querySelector(
    "#prizeCard .card-header"
  ).innerHTML = `Room ID and Password<button type="button" class="btn-close btn-close-white float-end" aria-label="Close" onclick="closeCard()"></button>`;
  if (match_data[i]["room"][1] == undefined) {
    document.querySelector(
      "#prizeCard .card-body"
    ).innerHTML = `<p class="card-text"style="color: white;font-size: 15px;">${match_data[i]["room"][0]}<button class="btn btn-outline-secondary btn-sm" style="margin-left: 10px" type="button" onclick="navigator.clipboard.writeText('${match_data[i]["room"][0]}')">Copy</button></p><p class="card-text"style="color: white;font-size: 15px;">${match_data[i]["room"][1]}<button class="btn btn-outline-secondary btn-sm" style="margin-left: 10px" type="button" onclick="navigator.clipboard.writeText('${match_data[i]["room"][1]}')">Copy</button></p>`;
  } else {
    document.querySelector(
      "#prizeCard .card-body"
    ).innerHTML = `<p class="card-text"style="color: white;font-size: 15px;">Wait . password is not given . reload page</p>`;
  }
  openCard("room");
}
