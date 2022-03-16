// Koden her er genbrugt fra Dittes portfolio 
// og rettet sådan så det passer ind til dette projekt

//Sætter det aktive Id til at være 0, så det har en værdi
var activeId = 0;

//Her starter funktionen, når man (onclick) på img med pilene
//Hvis det aktive Id IKKE er lig med 4, så skal den pluse sig selv med én
//Hvis det aktive Id ER lig med 4, så skal den skifte tilbage til 0
function nextImage(){
    if(activeId !== 4){
        activeId = activeId + 1;
    } else {
        activeId = 0;
    }

    // Her laver den en loop, for at hurtig læse en masse forskellige værdier
    // Sætter en ny variabel til at være 0 hvergang funktionen bliver kørt. 
    // Så længe variablen "i" er mindre end 5, så vil den pluse sig med 1 (sådan så loopet forsætter, med at køre)
    // Når i pluser sig selv så den er lige 5, så stopper den loopet
    // Når den kører loopet, så tjekker den hvad i er og hvad det aktive Id er, sådan så den tilføjer og fjerne classes
    for (let i = 0; i < 5; i++) {
        if(i == activeId){
            document.getElementById('image' + i).classList.add('imageActive');
        } else {
            document.getElementById('image' + i).classList.remove('imageActive');
        }
    }
}

// Ny funktion, samme princip som ovenover
// Det er (onclick) på den anden pil
// Hvis det aktive Id IKKE er lig med 0, så skal den minuse sig selv med én
// Hvis det aktive Id ER lig med 0, så skal den skifte tilbage til 4
function previousImage(){
    if(activeId !== 0){
        activeId = activeId - 1;
    } else {
        activeId = 4;
    }

    // Her er det samme loop, bare i den anden funktion
    // Loopet gør præcis det samme som i funktionen ovenover
    for (let i = 0; i < 5; i++) {
        if(i == activeId){
            document.getElementById('image' + i).classList.add('imageActive');
        } else {
            document.getElementById('image' + i).classList.remove('imageActive');        }
    }
}