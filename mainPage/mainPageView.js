// MAIN PAGE VIEW ///////////////////////////////////////////////////////////////////////
function mainPage() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="main">
        <div class="container">
        <button onclick="">Endre utseende</button>
        <button onclick="">Butikk</button>
            <button onclick="">SPILL</button>
            <button onclick="updateViewNewUserOrLogin()">LOGG UT</button>
            <button onclick="">Toppliste</button>
        </div>
    </div>
    `;
}
