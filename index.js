
letra = "X"
conf = 0
celulaclicada = ""
function joga(celula) {
    celulaclicada = document.getElementById(celula).innerHTML;
    if (conf == 1) {
        letra = ""
        novo()
    }
    if (celulaclicada == "X" || celulaclicada == "O") {
        document.getElementById("recado").innerHTML = "Este quadrado já foi escolhido!"

    } else {
        document.getElementById(celula).innerHTML = letra
        document.getElementById("recado").innerHTML = ""
        if (letra == "X") {
            letra = "O";
        } else {
            letra = "X";
        }
        document.getElementById("start").innerHTML = "Vez do jogador " + letra
    }
}


function verif() {
    c11 = document.getElementById('cel11').innerHTML;
    c12 = document.getElementById('cel12').innerHTML;
    c13 = document.getElementById('cel13').innerHTML;
    c21 = document.getElementById('cel21').innerHTML;
    c22 = document.getElementById('cel22').innerHTML;
    c23 = document.getElementById('cel23').innerHTML;
    c31 = document.getElementById('cel31').innerHTML;
    c32 = document.getElementById('cel32').innerHTML;
    c33 = document.getElementById('cel33').innerHTML;
    if (((c11 != '') && (c12 != '') && (c13 != '') && (c11 == c12) && (c12 == c13)) || 
    ((c11 != '') && (c22 != '') && (c33 != '') && (c11 == c22) && (c22 == c33)) || 
    ((c11 != '') && (c21 != '') && (c31 != '') && (c11 == c21) && (c21 == c31)) || 
    ((c21 != '') && (c22 != '') && (c23 != '') && (c21 == c22) && (c22 == c23)) || 
    ((c31 != '') && (c32 != '') && (c33 != '') && (c31 == c32) && (c32 == c33)) || 
    ((c12 != '') && (c22 != '') && (c32 != '') && (c12 == c22) && (c22 == c32)) || 
    ((c13 != '') && (c23 != '') && (c33 != '') && (c13 == c23) && (c23 == c33)) || 
    ((c31 != '') && (c22 != '') && (c13 != '') && (c31 == c22) && (c22 == c13))) {
        if (letra == "X") {
            document.getElementById("recado").innerHTML = "O ganhou! Parabéns!"
        }
        if (letra == "O") {
            document.getElementById("recado").innerHTML = "X ganhou! Parabéns!"
        }

        conf = 1
    }
    if (c11 != '' && c12 != '' && c13 != '' && c21 != '' && c22 != '' && c23 != '' && c31 != '' && c32 != '' && c33 != '') {
        document.getElementById("recado").innerHTML = "VELHA"
    }

}


function novo() {
    for (i = 1; i < 4; i++) {
        for (j = 1; j < 4; j++) {
            nomecelula = 'cel' + i + j
            document.getElementById(nomecelula).innerHTML = '';
            document.getElementById("recado").innerHTML = ""
            document.getElementById("start").innerHTML = "clique para começar"
            letra = "X"
            conf = 0
        }
    }
}