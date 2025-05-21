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
var result_data = [];

function result() {
  result_data = [];
  profile_Data.h_array.forEach((n) => {
    result_data.push({
      match: n[0],
      title: n[0].toUpperCase() + " Match",
      date: n[2],
      prize: n[1],
      type: n[6],
      fee: n[7],
      pkill: n[8],
      map: n[9],
      version: n[10],
      id: n[4],
      list: n[11],
    });
  });
  var result_html = `
    <div class="container" style="padding-bottom: 100px">
      <div class="tab-container2">
        <button class="tab-button2 active" onclick="result_filter(['br','cs','lone','cs2','ludu','free']),this.classList.add('active')">All</button>
        <button class="tab-button2" onclick="result_filter(['br']),this.classList.add('active')">BR</button>
        <button class="tab-button2" onclick="result_filter(['cs']),this.classList.add('active')">Clash Squad</button>
        <button class="tab-button2" onclick="result_filter(['lone']),this.classList.add('active')">LoneWolf</button>
        <button class="tab-button2" onclick="result_filter(['cs2']),this.classList.add('active')">CS 1v1 2v2</button>
        <button class="tab-button2" onclick="result_filter(['ludu']),this.classList.add('active')">Ludu</button>
        <button class="tab-button2" onclick="result_filter(['free']),this.classList.add('active')">FreeMatch</button>
      </div>
`;
  result_data.forEach((e, index) => {
    if (e.match == "cs") {
      var src = "img/cs banner.png";
    } else if (e.match == "lone") {
      src = "img/lone wolf banner.png";
    } else if (e.match == "cs2") {
      src = "img/cs 2 v 2 banner.png";
    } else if (e.match == "ludu") {
      src = "img/ludu banner.png";
    } else if (e.match == "free") {
      src = "img/free  banner.png";
    } else {
      src = "img/br banner.png";
    }
    result_html += `<div class="match-card2 mt-3" data-filter="${
      e.match
    }" onclick="result_1(${index})">
      <div class="card-body d-flex align-items-center">
        <img src="${src}" class="card-img-top" alt="Match Image">
        <div>
          <h6 class="match-title m-0" style="font-size: 18px;">${e.title}</h6>
          <p class="match-details">${dateFormat(e.date)}</p>
        </div>
      </div>
      <div class="d-flex justify-content-around">
        <div class="text-center match-prize">WIN PRIZE<br><strong>${
          e.prize
        } TK</strong></div>
        <div class="text-center match-entry">ENTRY TYPE<br><strong>${
          e.type
        }</strong></div>
        <div class="text-center match-entry">ENTRY FEE<br><strong>${
          e.fee
        }</strong></div>
      </div>
      <div class="d-flex justify-content-around mt-0">
        <div class="text-center match-prize">PER KILL<br><strong>${
          e.pkill
        }</strong></div>
        <div class="text-center match-entry">MAP<br><strong>${
          e.map
        }</strong></div>
        <div class="text-center match-entry">VERSION<br><strong>${
          e.version
        }</strong></div>
      </div>
      <div class="match-id">#${e.id}</div>
    </div>`;
  });

  main.innerHTML = result_html;
}

function result_1(i) {
  var result_1html = `
    <div class="top-bar">
      <i onclick="result()" class="bi bi-chevron-left pl-4"></i>
      <h5 class="pt-2">Detail Page</h5>
    </div>
    <div style="padding: 0 20px 100px;">
      <div class="match-info3">
        <p>${result_data[i].title}</p>
        <p>${dateFormat(result_data[i].date)}</p>
        <div class="match-details3">
          <div>WIN PRIZE<br>${result_data[i].prize} TK</div>
          <div>PER KILL<br>${result_data[i].pkill} TK</div>
          <div>ENTRY FEE<br>${result_data[i].fee} TK</div>
        </div>
      </div>

      <div class="result-section3">
        <div class="result-title3">WINNER WINNER WINNER</div>
        <table class="result-table3">
          <thead>
            <tr>
              <th>#</th>
              <th>Player Name</th>
              <th>Kills</th>
              <th>Winning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>${result_data[i].list == "---" ? "--" : result_data[i].list[0][0]}</td>
              <td>${result_data[i].list == "---" ? "--" : result_data[i].list[0][1]}</td>
              <td>${result_data[i].list == "---" ? "--" : result_data[i].list[0][2]} TK</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="result-section3">
        <div class="result-title3">FULL RESULT</div>
        <table class="result-table3">
          <thead>
            <tr>
              <th>#</th>
              <th>Player Name</th>
              <th>Kills</th>
              <th>Winning</th>
            </tr>
          </thead>
          <tbody>    
    `;
  if (result_data[i].list != "---") {
    result_data[i].list.forEach((e, ii) => {
      result_1html += `<tr>
                            <td>${ii + 1}</td>
                            <td>${e[0]}</td>
                            <td>${e[1]}</td>
                            <td>${e[2]} TK</td>
                        </tr>`;
    });
  }
  main.innerHTML =
    result_1html +
    `</tbody>
        </table>
      </div>
    </div>`;
}

function result_filter(fil) {
  let temp = document.querySelectorAll("#main .container .match-card2");
  if (temp.length != 0) {
    temp.forEach((e) => {
      if (fil.includes(e.dataset.filter)) {
        e.style.display = "block";
      } else {
        e.style.display = "none";
      }
    });
  } else {
    loading();
    result();
  }
  document.querySelectorAll(".tab-container2 .tab-button2").forEach((e) => {
    e.classList.remove("active");
  });
}
