var main = document.getElementById("main");
const webAppUrl =
  "https://script.google.com/macros/s/AKfycbyTKRcSqiwsmUsM5c791LNhNAdWLKTLhJBsMY32MF1cEWwKGxnrhn6SmIyXKC5rAHHtJA/exec";
function profile() {
  var profile_html = `    <div class="container">
      <div class="profile-container4">
          <div class="profile-image4">
              <i class="bi bi-person-circle"></i>
          </div>
          <div class="profile-name4">${profile_Data.name}</div>
          <div class="profile-stats4">
              <div>
                  <strong>${profile_Data.history.split(",").length -1}</strong>
                  Match Played
              </div>
              <div>
                  <strong>${profile_Data.money}</strong>
                  BDT
              </div>
              <div style="display:none">
                  <strong> 0</strong>
                  Won
              </div>
          </div>
          <ul class="profile-menu4">
              <li onclick="wallet()"><i class="bi bi-wallet-fill"></i> Wallet</li>
              <li onclick="withdraw()"><i class="bi bi-cash"></i> Withdraw</li>
              <li onclick="deposit()"><i class="bi bi-cash"></i> Deposit</li>
              <li onclick="depo_history()"><i class="bi bi-cash"></i> Deposit History</li>
              <li onclick="with_history()"><i class="bi bi-cash"></i> Withdraw History</li>
              <li onclick="" style="display: none"><i class="bi bi-share-fill"></i> Refer and Earn</li>
              <li onclick="" style="display: none"><i class="bi bi-person-circle"></i> My Profile</li>
              <li onclick="toPlayer()"><i class="bi bi-trophy-fill"></i> Top Players</li>
          </ul>
          <button class="logout-button4" onclick="localStorage.removeItem('token') ,window.location.href = 'login.html'">Logout</button>
      </div>
  </div>`;
  main.innerHTML = profile_html;
}

// wallet

function wallet() {
  var wallet_html = `<div class="container5">
    <div class="balance-section5">
        <div>
            <h3>🏆 TOTAL CASH BALANCE</h3>
            <p>BDT ${profile_Data.money}</p>
        </div>
    </div>

    <div class="balance-section5">
        <div>
            <h3>💵 Withdraw</h3>
            <p style="display:none">BDT 0</p>
        </div>
        <div onclick="withdraw()">
            <button class="withdraw-button5">WITHDRAW</button>
        </div>
    </div>

    <div class="balance-section5">
        <div>
            <h3>📩 DEPOSIT CASH</h3>
            <p style="display:none">BDT 0</p>
        </div>
        <div onclick="deposit()">
            <button  class="add-more-button5">+ ADD MORE</button>
        </div>
    </div>

    <div style="display: none" class="balance-section5">
        <div>
            <h3>REFER AND EARN</h3>
        </div>
        <div>
            <button class="refer-earn-button5"> REFER & EARN</button>
        </div>
    </div>

    <div class="video-section5">
        <p>HOW TO ADD MONEY ?<br>কিভাবে টাকা অ্যাড করবেন</p>
        <button class="video-button5">► ভিডিওটি দেখুন</button>
    </div>

    <div class="video-section5">
        <p>HOW TO COLLECT ROOM ID ?<br>কিভাবে রুম আইডি পাবেন</p>
        <button class="video-button5">► ভিডিওটি দেখুন</button>
    </div>

    <div class="video-section5">
        <p>HOW TO JOIN IN A MATCH ?<br>কিভাবে ম্যাচে জয়েন করবেন</p>
        <button class="video-button5">► ভিডিওটি দেখুন</button>
    </div>
</div>`;
  main.innerHTML = wallet_html;
}

// withdraw

function withdraw() {
  var withdraw_html = `<div class="container6">

    <div class="available-amount6">
        <p>Available Amount</p>
        <p>BDT 0</p>
    </div>

    <div class="payment-methods6" data-type="Bkash">
        <img onclick='document.querySelectorAll(".payment-methods6 img").forEach(e=>{e.classList.remove("active")}),this.classList.add("active") , document.getElementsByClassName("payment-methods6")[0].dataset.type= "Bkash"' class="active" src="img/bkash.png" alt="bKash">
        <img onclick='document.querySelectorAll(".payment-methods6 img").forEach(e=>{e.classList.remove("active")}),this.classList.add("active") , document.getElementsByClassName("payment-methods6")[0].dataset.type= "Nagad"' src="img/nagad.png" alt="Nagad">
        <img onclick='document.querySelectorAll(".payment-methods6 img").forEach(e=>{e.classList.remove("active")}),this.classList.add("active") , document.getElementsByClassName("payment-methods6")[0].dataset.type= "Rocket"' src="img/rocket.png" alt="Rocket">
    </div>

    <div class="input-group6">
        <label for="mobile">Mobile Number</label>
        <input type="text" id="mobile" placeholder="Mobile Number">
    </div>

    <div class="input-group6">
        <label for="amount">Amount to Withdraw</label>
        <input type="text" id="amount" placeholder="Amount to Withdraw">
    </div>

    <p class="minimum-amount6">* Minimum Withdrawal amount is ৳ 100</p>

    <button class="withdraw-button6" onclick="postW()">Withdraw</button>
</div>`;
  main.innerHTML = withdraw_html;
}

async function postW() {
  if (document.getElementById("amount").value > profile_Data.money) {
    toast("Not Enough Money !");
    return;
  } else {
    profile_Data.money =
      profile_Data.money - document.getElementById("amount").value;
  }
  try {
    const dataToSend = {
      call: "with_post",
      token: localStorage.getItem("token"),
      name: profile_Data.name,
      number: document.getElementById("mobile").value,
      amount: document.getElementById("amount").value,
      method:
        document.getElementsByClassName("payment-methods6")[0].dataset.type,
    };
    const response = await fetch(webAppUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(dataToSend).toString(),
    });

    if (response.ok) {
      var rex = await response.json(); // Or response.json() if your server returns JSON
      if (rex.bio) {
        toast("Successfull");
      } else {
        toast("Not Enough Money !");
      }
    } else {
      toast(`Error !`);
    }
  } catch (error) {
    toast("Network Error !");
  }
}
// deposit

function deposit() {
  var deposit_html = `<div class="container7">
    <div class="payment-methods7">
        <img src="img/bkash.png" onclick="document.getElementsByClassName('transaction-section7')[0].style.backgroundColor = '#e91e63',document.getElementsByClassName('verify-button7')[0].style.backgroundColor = '#e91e63',document.getElementsByClassName('transaction-section7')[0].dataset.type = 'Bkash'" alt="bKash">
        <img src="img/rocket.png" onclick="document.getElementsByClassName('transaction-section7')[0].style.backgroundColor = '#8c3494',document.getElementsByClassName('verify-button7')[0].style.backgroundColor = '#8c3494',document.getElementsByClassName('transaction-section7')[0].dataset.type = 'Rocket'" alt="Rocket">
        <img src="img/nagad.png" onclick="document.getElementsByClassName('transaction-section7')[0].style.backgroundColor = '#ea1d25',document.getElementsByClassName('verify-button7')[0].style.backgroundColor = '#ea1d25',document.getElementsByClassName('transaction-section7')[0].dataset.type = 'Nagad'" alt="Nagad">
    </div>

    <div class="transaction-section7" data-type="Bkash">
        <h2>ট্রান্সজেকশন আইডি দিন</h2>
        <input type="text" id="trxid" placeholder="ট্রান্সজেকশন আইডি দিন">
        <input type="text" id="amount" placeholder="Amount">

        <ul class="instruction-list7">
            <li>* 247 # ডায়াল করে আপনার BKASH মোবাইল মেনুতে যান অথবা BKASH অ্যাপে যান ।</li>
            <li>Send Money - এ ক্লিক করুন ।</li>
            <li>প্রাপক নম্বর হিসেবে নিচের এই নম্বরটি লিখুন <br> 01792433083 <button onclick="navigator.clipboard.writeText('01792433083')" class="copy-button">Copy</button></li>
            <li>নিশ্চিত করতে এখন আপনার BKASH মোবাইল মেনু পিন লিখুন ।</li>
            <li>এখন উপরের বক্সে আপনার Transaction ID এবং Amount দিন আর নিচের VERIFY বাটনে ক্লিক করুন ।</li>
        </ul>

        <button class="verify-button7" onclick="postD()" style="border:5px solid white">Deposit</button>
    </div>
</div>`;
  main.innerHTML = deposit_html;
}

async function postD() {
  try {
    const dataToSend = {
      call: "dipo_post",
      token: localStorage.getItem("token"),
      number: document.getElementById("trxid").value,
      name: profile_Data.name,
      amount: document.getElementById("amount").value,
      method: document.getElementsByClassName("transaction-section7")[0].dataset
        .type,
    };
    const response = await fetch(webAppUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(dataToSend).toString(),
    });

    if (response.ok) {
      var rex = await response.json(); // Or response.json() if your server returns JSON
      if (rex.bio) {
        toast("Successfull");
      } else {
        toast("Error !");
      }
    } else {
      toast(`Error !`);
    }
  } catch (error) {
    toast("Network Error !");
  }
}
// transation history
function depo_history() {
  let toPlayer_data = profile_Data.d_array
    .sort((a, b) => {
      return a[2] - b[2];
    })
    .reverse();

  var toPlayer_html = `<div class="container8">
    <div class="header8">
        <div class="back-button8" onclick="profile()">&lt;</div>
        <h2>Deposit History</h2>
    </div>

    <table class="player-list8">
        <thead>
            <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Method</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
        `;
  toPlayer_data.forEach((e) => {
    toPlayer_html += `<tr>
                <td>${e[0]}</td>
                <td>${e[2]}</td>
                <td>${dateFormat(e[3])}</td>
                <td>${e[5]}</td>
                <td>${
                  e[4] == 0
                    ? "<p style='color:blue'>Pending</p>"
                    : e[4] == 1
                    ? "<p style='color:green'>Success</p>"
                    : "<p style='color:red'>Canceled</p>"
                }</td>
            </tr>`;
  });

  main.innerHTML =
    toPlayer_html +
    `</tbody>
    </table>
</div>`;
}
//
function with_history() {
  let toPlayer_data = profile_Data.w_array
    .sort((a, b) => {
      return a[2] - b[2];
    })
    .reverse();

  var toPlayer_html = `<div class="container8">
    <div class="header8">
        <div class="back-button8" onclick="profile()">&lt;</div>
        <h2>Withdraw History</h2>
    </div>

    <table class="player-list8">
        <thead>
            <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Method</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
        `;
  toPlayer_data.forEach((e) => {
    toPlayer_html += `<tr>
                <td>${e[0]}</td>
                <td>${e[1]}</td>
                <td>${dateFormat(e[2])}</td>
                <td>${e[4]}</td>
                <td>${
                  e[3] == 0
                    ? "<p style='color:blue'>Pending</p>"
                    : e[3] == 1
                    ? "<p style='color:green'>Success</p>"
                    : "<p style='color:red'>Canceled</p>"
                }</td>
            </tr>`;
  });

  main.innerHTML =
    toPlayer_html +
    `</tbody>
    </table>
</div>`;
}
// top player

function toPlayer() {
  var toPlayer_data = [
    ["coming.....", 0],
    ["coming...", 0],
  ];
  var toPlayer_html = `<div class="container8">
    <div class="header8">
        <div class="back-button8" onclick="profile()">&lt;</div>
        <h2>TOP PLAYERS</h2>
    </div>

    <table class="player-list8">
        <thead>
            <tr>
                <th>SI No.</th>
                <th>Name</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
        `;
  toPlayer_data.forEach((e, i) => {
    toPlayer_html += `<tr>
                <td>${i + 1}</td>
                <td>${e[0]}</td>
                <td>${e[1]} TK</td>
            </tr>`;
  });

  main.innerHTML =
    toPlayer_html +
    `</tbody>
    </table>
</div>`;
}
