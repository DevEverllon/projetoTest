// Form 1: Velocidade
document.getElementById("form1").addEventListener("submit", function (e) {
    e.preventDefault();
    const deslocamento = parseFloat(document.getElementById("deslocamento").value);
    const tempo = parseFloat(document.getElementById("tempo").value);
    let resultado = "";
    if (tempo !== 0) {
        const velocidade = deslocamento / tempo;
        resultado = `Velocidade = ${velocidade.toFixed(2)} m/s`;
    } else {
        resultado = "Tempo não pode ser zero.";
    }
    document.getElementById("resultado1").textContent = resultado;
});

// Form 2: Tempo
document.getElementById("form2").addEventListener("submit", function (e) {
    e.preventDefault();
    const deslocamento = parseFloat(document.getElementById("deslocamento2").value);
    const velocidade = parseFloat(document.getElementById("velocidade2").value);
    let resultado = "";
    if (velocidade !== 0) {
        const tempo = deslocamento / velocidade;
        resultado = `Tempo = ${tempo.toFixed(2)} s`;
    } else {
        resultado = "Velocidade não pode ser zero.";
    }
    // Mostra resultado abaixo do formulário
    let resSpan = document.getElementById("resultado2");
    if (!resSpan) {
        resSpan = document.createElement("span");
        resSpan.id = "resultado2";
        resSpan.style.display = "block";
        resSpan.style.marginTop = "15px";
        resSpan.style.fontSize = "18px";
        resSpan.style.color = "#333";
        resSpan.style.fontWeight = "bold";
        document.getElementById("tab2").appendChild(resSpan);
    }
    resSpan.textContent = resultado;
});

// Form 3: Deslocamento
document.getElementById("form3").addEventListener("submit", function (e) {
    e.preventDefault();
    const tempo = parseFloat(document.getElementById("tempo3").value);
    const velocidade = parseFloat(document.getElementById("velocidade3").value);
    const deslocamento = velocidade * tempo;
    let resultado = `Deslocamento = ${deslocamento.toFixed(2)} m`;
    // Mostra resultado abaixo do formulário
    let resSpan = document.getElementById("resultado3");
    if (!resSpan) {
        resSpan = document.createElement("span");
        resSpan.id = "resultado3";
        resSpan.style.display = "block";
        resSpan.style.marginTop = "15px";
        resSpan.style.fontSize = "18px";
        resSpan.style.color = "#333";
        resSpan.style.fontWeight = "bold";
        document.getElementById("tab3").appendChild(resSpan);
    }
    resSpan.textContent = resultado;
});