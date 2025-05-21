var main = document.getElementById("main");

function loading() {
  main.innerHTML =
    '<div style="display: flex;justify-content: center;align-items: center;height: 100vh;"><div class="spinner-border" style="color: #0026ff;" role="status"><span class="visually-hidden">Loading....</span></div></div>';
}
function toast(text = "Error !") {
  document.getElementById("liveToast").innerHTML = `
      <div class="d-flex">
        <div class="toast-body">${text}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
          aria-label="Close"></button>
      </div>`;

  new bootstrap.Toast(document.getElementById("liveToast")).show();
}

var profile_Data = { "bio": "--" , "name": "--", "history": "--", "money": "--" , "d_array": "--" , "w_array": "--" , "h_array": "--", "top_player": "--" , "all_history": "--" , "f_history": "--"};
var card_d = {
  br_match: [],
  cs_match: [],
  lone_match: [],
  cs2_match: [],
  ludu_match: [],
  free_match: [],
};

function home_f() {
  var home = `
      <!-- Main Content -->
      <div class="container mt-1 p-0">
        <!-- Bootstrap Carousel Slider -->
        <div id="imageSlider" class="carousel slide" data-bs-ride="carousel">
          <!-- Indicators -->
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#imageSlider" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          
          <!-- Slides -->
          <div class="carousel-inner">
            <div class="carousel-item active">
              <a id="thumnail" href="#"><img style="width: 100%" src="img/freefire thumble.png"></a>
            </div>
            <div class="carousel-item">
              <a id="thumnail" href="#"><img style="width: 100%" src="img/add money thumble.png"></a>
            </div>
            <div class="carousel-item">
              <a id="thumnail" href="#"><img style="width: 100%" src="img/ludu tumbail.png"></a>
            </div>
            <div class="carousel-item">
              <a id="thumnail" href="#"><img style="width: 100%" src="img/telegram tumbail.png"></a>
            </div>
          </div>
          
          <!-- Controls -->
          <button class="carousel-control-prev" type="button" data-bs-target="#imageSlider" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#imageSlider" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        
        <!-- Beautiful Marquee Div -->
        <div class="marquee-container mt-4">
          <div id="marq" class="marquee-content">
          </div>
        </div>
      </div>
      
      <!-- Bold Title -->
      <div class="title">FreeFire</div>
      
      <!-- Two Cards in a Row -->
      <div class="container card-container">
        <div class="card" onclick="first_card(type0='br_match',title0='FreeFire FullMap Matches')">
          <img style="height: auto" src="img/br banner.png" alt="Card 1 Image">
          <div class="card-body">
            <h5 class="card-title">BR MATCH</h5>
            <p class="card-text">${
              card_d.br_match.length > 0
                ? card_d.br_match.length + " matches found"
                : "Not available"
            }</p>
          </div>
        </div>
        <div class="card" onclick="first_card(type0='cs_match',title0='Clash Squad')">
          <img style="height: auto" src="img/cs banner.png" alt="Card 2 Image">
          <div class="card-body">
            <h5 class="card-title">Clash Squad</h5>
            <p class="card-text">${
              card_d.cs_match.length > 0
                ? card_d.br_match.length + " matches found"
                : "Not available"
            }</p>
          </div>
        </div>
      </div>
      <div class="container card-container">
        <div class="card" onclick="first_card(type0='lone_match',title0='Lone Wolf')">
          <img style="height: auto" src="img/lone wolf banner.png">
          <div class="card-body">
            <h5 class="card-title">LONE WOLF</h5>
            <p class="card-text">${
              card_d.lone_match.length > 0
                ? card_d.br_match.length + " matches found"
                : "Not available"
            }</p>
          </div>
        </div>
        <div class="card" onclick="first_card(type0='cs2_match',title0='CS 2 vs 2')">
          <img style="height: auto" src="img/cs 2 v 2 banner.png" alt="Card 2 Image">
          <div class="card-body">
            <h5 class="card-title">CS 2 VS 2</h5>
            <p class="card-text">${
              card_d.cs2_match.length > 0
                ? card_d.br_match.length + " matches found"
                : "Not available"
            }</p>
          </div>
        </div>
      </div>
          <!-- Bold Title -->
      <div class="title">LUDU AND FREE MATCH</div>

      <div class="container card-container">
        <div class="card" onclick="first_card(type0='ludu_match',title0='Ludu King')">
          <img style="height: auto" src="img/ludu banner.png" alt="Card 1 Image">
          <div class="card-body">
            <h5 class="card-title">Ludu</h5>
            <p class="card-text">${
              card_d.ludu_match.length > 0
                ? card_d.br_match.length + " matches found"
                : "Not available"
            }</p>
          </div>
        </div>
        <div class="card" onclick="first_card(type0='free_match',title0='Free Match')">
          <img style="height: auto" src="img/free  banner.png" alt="Card 2 Image">
          <div class="card-body">
            <h5 class="card-title">Free Match</h5>
            <p class="card-text">${
              card_d.free_match.length > 0
                ? card_d.br_match.length + " matches found"
                : "Not available"
            }</p>
          </div>
        </div>
      </div>
      <div style="padding: 55px 0">
        
      </div>


  `;

  main.innerHTML = home;

  // Marque

  fetch("json/main.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network Error");
      }
      return res.json();
    })
    .then((data) => {
      data.mar.forEach((element) => {
        document.getElementById("marq").innerHTML += `<span>${element}</span>`;
      });
      document.querySelectorAll("#thumnail").forEach((element, index) => {
        element.href = data.thumbnail[index];
      });
    })
    .catch((error) => console.log(error));
}
// Card

function first_card(type0, title0) {
  if (card_d[type0].length == 0) {
    toast("No " + title0 + " matches found");
    return;
  }
  var card_html = `<div class="top-bar">
    <i onclick="home_f()" class="bi bi-chevron-left pl-4"></i>
    <h5 class="pt-2">${title0}</h5>
</div>

<div id="first_card" style="padding-bottom: 100px" class="container">
</div>`;

  main.innerHTML = card_html;
  if (type0 == "cs_match") {
    var src = "img/cs banner.png";
  } else if (type0 == "lone_match") {
    src = "img/lone wolf banner.png";
  } else if (type0 == "cs2_match") {
    src = "img/cs 2 v 2 banner.png";
  } else if (type0 == "ludu_match") {
    src = "img/ludu banner.png";
  } else if (type0 == "free_match") {
    src = "img/free  banner.png";
  } else {
    src = "img/br banner.png";
  }
  card_d[type0].forEach((cardjson, index) => {
    document.getElementById("first_card").innerHTML += `<div class="match-card">
        <div onclick="card_data('${type0}',${index},'${title0}')" class="match-details">
            <img src="${src}" alt="Match Image" class="match-image">
            <div>
                <h5 class="match-title">${cardjson.tittle}</h5>
                <p class="match-date">${new Date(cardjson.date).getDate()}-${
      new Date(cardjson.date).getMonth() + 1
    }-${new Date(cardjson.date).getFullYear()} at ${
      new Date(cardjson.date).getHours() >= 12
        ? new Date(cardjson.date).getHours() - 12
        : new Date(cardjson.date).getHours()
    }:${new Date(cardjson.date).getMinutes()} ${
      new Date(cardjson.date).getHours() >= 12 ? "PM" : "AM"
    }</p>
            </div>
        </div>
        <div class="data-grid">
            <div><strong>WIN PRIZE</strong>${cardjson.prize} TK</div>
            <div><strong>ENTRY TYPE</strong>${cardjson.type}</div>
            <div><strong>ENTRY FEE</strong>${cardjson.fee} TK</div>
            <div><strong>PER KILL</strong>${cardjson.pkill} TK</div>
            <div><strong>MAP</strong>${cardjson.map}</div>
            <div><strong>VERSION</strong>${cardjson.version}</div>
        </div>
        <div class="progress-bar-container">
            <div class="progress-bar" style="width:${
              (cardjson.list.length / 48) * 100
            }%"></div>
        </div>
        <div class="spot-details d-flex justify-content-between">
            <div>Only ${48 - cardjson.list.length} spots are left</div>
             <div>${cardjson.list.length}/48</div>
            <div><button class="match-full-button" ${cardjson.id in profile_Data.f_history ? "":
              cardjson.list.length >= 48
                ? ""
                : `onclick="join_main('${type0}','${title0}','${cardjson.tittle}',${cardjson.date},'${cardjson.prize}','${cardjson.fee}','${cardjson.duo}','${cardjson.id}')"`
            }>${
      cardjson.id in profile_Data.f_history ? "Joined": cardjson.list.length >= 48 ? "Match Full" : "Join"
    }</button></div>
        </div>
    
        <div class="room-prize-details">
            <button onclick="card_data('${type0}',${index},'${title0}')"><i class="bi bi-door-open-fill"></i> Room Details <i class="fas fa-chevron-down"></i></button>
            <button onclick="openCard('${type0}',${index})"><i class="bi bi-trophy-fill"></i> Total Prize Details <i class="fas fa-chevron-down"></i></button>
        </div>
        <div id="timer" data-timer="${cardjson.date}" class="timer">
            <i class="bi bi-clock"></i> STARTS IN - --h:--m:--s
        </div>
        <div class="match-id" style="margin-top: 20px">#${cardjson.id}</div>
    </div>`;
  });
}
// after Card

function card_data(type0, index, title0) {
  var player_list = "";
  var cardjson = card_d[type0][index];
  cardjson.list.forEach((element, index) => {
    player_list += `<li><strong>${index + 1}</strong> ${element}</li>`;
  });
  var card_html = `<div class="top-bar">
    <i onclick="first_card('${type0}','${title0}')" class="bi bi-chevron-left pl-4"></i>
    <h5 class="pt-2">Detail Page</h5>
</div><div class="match-container" style="padding-bottom: 80px;padding-top: 0px;">
      <div class="title1">${cardjson.tittle}</div>

      <div class="match-info">
          <div><b>Type:</b> ${cardjson.type}</div>
          <div><b>Version:</b> ${cardjson.version}</div>
          <div><b>Map:</b> ${cardjson.map}</div>
          <div><b>Match Type:</b> ${cardjson.mtype}</div>
          <div><b>Entry Fee:</b> ${cardjson.fee} TK</div>
          <div><b>Match Schedule:</b> ${new Date(
            cardjson.date
          ).getDay()}-${new Date(cardjson.date).getDate()}-${new Date(
    cardjson.date
  ).getFullYear()} at ${
    new Date(cardjson.date).getHours() >= 12
      ? new Date(cardjson.date).getHours() - 12
      : new Date(cardjson.date).getHours()
  }:${new Date(cardjson.date).getMinutes()} ${
    new Date(cardjson.date).getHours() >= 12 ? "PM" : "AM"
  }</div>
      </div>
 
      <div class="prize-details">
          <div><b>Winning Prize:</b> ${cardjson.prize} TK</div>
          <div><b>Per Kill:</b> ${cardjson.pkill} TK</div>
      </div>

      <div class="room-details">
          Room details will be shared before 5-10 minutes of match start time.
      </div>

      <div class="rules-title1">Match Instructions and Rules</div>

      <div class="rules">
          <strong>⚠️ "Khelo Bangladesh" BR Match এর নিয়ম :-</strong><br><br>
          রুম আইডি এবং পাসওয়ার্ড ম্যাচ টাইমের ৫-৬ মিনিট আগে Room Details এ দেওয়া হবে। সঠিক সময়ে রুমে জয়েন করতে না পারলে টাকা রিফান্ড করা হবে না। আর রুম যদি ফুল দেখায় তাহলে অবজারভ এ গিয়ে স্ক্রিনশট দিতে না পারলে রিফান্ড পাবেন না।<br><br>
          কোন কারন ছাড়া রুম থেকে কিক মারলে Recording ছাড়া টাকা রিফান্ড পাবেন না। কিক মারার পরে ভিডিও করলে চলবে না। অ্যাপ থেকে কাস্টম আইডি পাসওয়ার্ড নেওয়া থেকেই ভিডিও চালু রাখতে হবে। কাস্টম Start হয়ে গেলে স্ক্রিন রেকর্ড OFF করে দিবেন।<br><br>
          গাড়ি বা মন্সটার ট্রাক চালালে তার ঐ ম্যাচের টাকা দেওয়া হবে না।<br>
          <ul>
              <li>শুধু মাত্র BR Survival [ Vehicles ON ] লিখা ম্যাচে গাড়ি Allow থাকবে।</li>
              <li>শুধু মাত্র BR Survival [ Vehicles ON ] লিখা ম্যাচে গাড়ি Allow থাকবে।</li>
              <li>শুধু মাত্র BR Survival [ Vehicles ON ] লিখা ম্যাচে গাড়ি Allow থাকবে।</li>
              <li>শুধু মাত্র BR Survival [ Vehicles ON ] লিখা ম্যাচে গাড়ি Allow থাকবে।</li>
              <li>শুধু মাত্র BR Survival [ Vehicles ON ] লিখা ম্যাচে গাড়ি Allow থাকবে।</li>
              <li>শুধু মাত্র BR Survival [ Vehicles ON ] লিখা ম্যাচে গাড়ি Allow থাকবে।</li>
          </ul>
          <h2>Registered Participants</h2>
          <ul class="participant-list">
            ${player_list}
          </ul>
      </div>
  </div>`;

  main.innerHTML = card_html;
}

//Prize detail card

function openCard(type0, i) {
  if (type0 != "room") {
    document.querySelector("#prizeCard > div .card-body").innerHTML = "";
    JSON.parse(JSON.parse(card_d[type0][0].detail)).forEach((element) => {
      document.querySelector(
        "#prizeCard > div .card-body"
      ).innerHTML += `<p class="card-text"style="color: white;font-size: 15px;">${element}</p>`;
    });
  }
  document.getElementById("prizeCard").style.display = "block";
}

function closeCard() {
  document.getElementById("prizeCard").style.display = "none";
}
//join
function join_main(type0, title0, title, date, prize, fee, duo1, id) {
  let duo = duo1.split(",");
  var ss = `<div class="top-bar">
      <i onclick="first_card(type0='${type0}',title0='${title0}')" class="bi bi-chevron-left pl-4"></i>
      <h5 class="pt-2">${title}</h5>
    </div>
    <div class="match-card1">
      <div class="match-title1">${title0}</div>
      <div class="match-date1">${new Date(date).getDay()}-${new Date(
    date
  ).getDate()}-${new Date(date).getFullYear()} at ${
    new Date(date).getHours() >= 12
      ? new Date(date).getHours() - 12
      : new Date(date).getHours()
  }:${new Date(date).getMinutes()} ${
    new Date(date).getHours() >= 12 ? "PM" : "AM"
  }</div>
      <div class="match-details1">
        <div>Win Prize: ${prize}TK</div>
        <div>Entry Fee: ${fee}TK</div>
      </div>
      <div class="match-instruction1">
        * অবশ্যই এখানে আপনার গেমের এর নামটি দিয়ে জয়েন করবেন ।
      </div>
      <div class="match-buttons1">
        ${duo.length == 1 ? '<button class="selected">Solo</button>' : ""}
        ${duo.length == 2 ? '<button class="selected">Duo</button>' : ""}
        ${duo.length == 4 ? '<button class="selected">Squad</button>' : ""}
      </div>
      <div id="input-group1">
        ${
          duo.length == 1
            ? `<div class="input-group1">
          <label for="player1">Player 1 Name</label>
          <input type="text" id="player1" placeholder="Enter Player 1 Name">
        </div>`
            : ""
        }
        ${
          duo.length == 2
            ? `<div class="input-group1">
          <label for="player1">Player 1 Name</label>
          <input type="text" id="player1" placeholder="Enter Player 1 Name">
        </div><div class="input-group1">
          <label for="player2">Player 2 Name</label>
          <input type="text" id="player2" placeholder="Enter Player 2 Name">
        </div>`
            : ""
        }
        ${
          duo.length == 4
            ? `<div class="input-group1">
          <label for="player1">Player 1 Name</label>
          <input type="text" id="player1" placeholder="Enter Player 1 Name">
        </div><div class="input-group1">
          <label for="player2">Player 2 Name</label>
          <input type="text" id="player2" placeholder="Enter Player 2 Name">
        </div><div class="input-group1">
          <label for="player3">Player 3 Name</label>
          <input type="text" id="player3" placeholder="Enter Player 3 Name">
        </div><div class="input-group1">
          <label for="player4">Player 4 Name</label>
          <input type="text" id="player4" placeholder="Enter Player 4 Name">
        </div>`
            : ""
        }
      </div>
    </div><button onclick="selectJoin('${type0}', '${title0}', '${title}', ${date}, ${prize}, ${fee}, '${duo1}',${id})" class="join-button1">Join Now!</button>`;

  main.innerHTML = ss;
}

function selectJoin(type0, title0, title, date, prize, fee, duo1, id) {
  let duo = duo1.split(",");
  let player = [];
  if (duo.length == 1) {
    player.push(document.getElementById("player1").value);
  } else if (duo.length == 2) {
    player.push(document.getElementById("player1").value);
    player.push(document.getElementById("player2").value);
  } else {
    player.push(document.getElementById("player1").value);
    player.push(document.getElementById("player2").value);
    player.push(document.getElementById("player3").value);
    player.push(document.getElementById("player4").value);
  }

  let dat = "";
  player.forEach((n, i) => {
    dat += "<p>" + i + 1 + ". " + n + "</p>";
  });
  var ss = `<div class="top-bar">
      <i onclick="join_main('${type0}', '${title0}', '${title}', '${date}', ${prize}, ${fee}, '${duo1}','${id}')" class="bi bi-chevron-left pl-4"></i>
      <h5 class="pt-2">${title}</h5>
    </div>
    <div class="match-card1">
      <div class="match-title1">${title0}</div>
      <div class="match-date1">${new Date(date).getDay()}-${new Date(
    date
  ).getDate()}-${new Date(date).getFullYear()} at ${
    new Date(date).getHours() >= 12
      ? new Date(date).getHours() - 12
      : new Date(date).getHours()
  }:${new Date(date).getMinutes()} ${
    new Date(date).getHours() >= 12 ? "PM" : "AM"
  }</div>
      <div class="match-details1">
        <div>Win Prize: ${prize}TK</div>
        <div><b>Total Entry Fee: ${fee * duo.length}TK</b></div>
      </div>
      <div class="match-instruction1">
        * অবশ্যই এখানে আপনার গেমের এর নামটি দিয়ে জয়েন করবেন ।
      </div>
      <div id="input-group1">
        ${dat}
      </div>
    </div>
    <div id="payment-loading">
    <button onclick="selectJoin1('${type0}','${id}','${player}')" class="join-button1">Pay & Join</button>;
    </div>`;
  main.innerHTML = ss;
}
async function selectJoin1(
  type0,
  id,
  player
) {
  const payment_loading = document.getElementById("payment-loading");
  payment_loading.innerHTML = `<button class="join-button1"><div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div></button>`;
  const webAppUrl =
    "https://script.google.com/macros/s/AKfycbyTKRcSqiwsmUsM5c791LNhNAdWLKTLhJBsMY32MF1cEWwKGxnrhn6SmIyXKC5rAHHtJA/exec";

  let type = ""
  if (type0 == "br_match"){
    type = "BR"
  }else if(type0 == "cs_match"){
    type = "CS"
  }else if(type0 == "cs2_match"){
    type = "CS2"
  }else if(type0 == "ludu_match"){
    type = "LUDU"
  }else if(type0 == "free_match"){
    type = "FREE"
  }else{
    type = "LONE"
  }
  
  if (localStorage.getItem("token")) {
    try {
      const dataToSend = {
        call: "payment",
        token: localStorage.getItem("token"),
        id: id,
        player: player,
        type: type
      };
      console.log(dataToSend)
      const response = await fetch(webAppUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(dataToSend).toString(),
      });

      if (response.ok) {
        let dd =  await response.json(); // Or response.json() if your server returns JSON
        if(dd.bio){
          payment_loading.innerHTML = `<button class="join-button1 text-success">Success</button>`
        }else{
          payment_loading.innerHTML = `<button class="join-button1 text-danger">Not Enough Money</button>`
        }
      } else {
        toast(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      toast("Network Error !");
    }
  }
}

//join_main()
//openCard('br_match')
//card_data();
//home_f();
//first_card();

setInterval(function () {
  document.querySelectorAll("#timer").forEach((element) => {
    var cardjson = parseInt(element.dataset.timer);
    element.innerHTML = `<i class="bi bi-clock"></i>${
      Date.now() > cardjson
        ? " Match Started"
        : ` STARTS IN - ${Math.floor(
            (cardjson - Date.now()) / 3600000
          )}h:${Math.floor(
            ((cardjson - Date.now()) % 3600000) / 60000
          )}m:${Math.floor(
            (((cardjson - Date.now()) % 3600000) % 60000) / 1000
          )}s`
    }`;
  });
}, 1000);

//
loading();

async function postData() {
  const webAppUrl =
    "https://script.google.com/macros/s/AKfycbyTKRcSqiwsmUsM5c791LNhNAdWLKTLhJBsMY32MF1cEWwKGxnrhn6SmIyXKC5rAHHtJA/exec";

  if (localStorage.getItem("token")) {
    try {
      const dataToSend = {
        call: "getHome",
        token: localStorage.getItem("token"),
      };
      const response = await fetch(webAppUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(dataToSend).toString(),
      });

      if (response.ok) {
        card_d = await response.json(); // Or response.json() if your server returns JSON
        home_f();
      } else {
        toast(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      toast("Network Error !");
    }

    // PRofile
    try {
      const dataToSend = {
        call: "getProfileInfo",
        token: localStorage.getItem("token"),
      };
      const response = await fetch(webAppUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(dataToSend).toString(),
      });

      if (response.ok) {
        profile_Data = await response.json(); // Or response.json() if your server returns JSON
      } else {
        toast(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      toast("Network Error !");
    }
  } else {
    toast("Login First !");
    window.location.href = "login.html";
  }
}
postData();
