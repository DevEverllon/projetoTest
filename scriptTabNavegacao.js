document.addEventListener("DOMContentLoaded", function() {
    // Tab navigation
    const tabs = [
        document.getElementById("tab1"),
        document.getElementById("tab2"),
        document.getElementById("tab3")
    ];
    const buttons = document.querySelectorAll(".tab-button");

    function showTab(index) {
        tabs.forEach((tab, i) => {
            tab.style.display = i === index ? "block" : "none";
        });
        buttons.forEach((btn, i) => {
            btn.style.fontWeight = i === index ? "bold" : "normal";
        });
    }
    // Inicializa mostrando a primeira aba
    showTab(0);

    buttons.forEach((btn, i) => {
        btn.addEventListener("click", () => showTab(i));
    })
});