function nextPage() {
    document.body.innerHTML = `
        <div class="container">
            <h1>Will you be my Valentine? 💌</h1>
            <button onclick="sayYes()">Yes 💖</button>
            <button id="noBtn" onmouseover="moveButton()">No 🙈</button>
        </div>
    `;
}

function moveButton() {
    const btn = document.getElementById("noBtn");
    btn.style.position = "absolute";
    btn.style.top = Math.random() * window.innerHeight + "px";
    btn.style.left = Math.random() * window.innerWidth + "px";
}

function sayYes() {
    document.body.innerHTML = `
        <div class="container">
            <h1>YAYYY 🥰</h1>
            <p>You just made me the happiest person alive 💖</p>
            <p>I made something special for you…</p>
            <button onclick="goToSecret()">Click here for your surprise 💌</button>
        </div>
    `;
}

function goToSecret() {
    window.location.href = "https://YOUR-USERNAME.github.io/secret-site/";
}
