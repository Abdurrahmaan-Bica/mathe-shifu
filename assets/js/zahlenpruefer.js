
// Diese Funktion ueberprueft , ob die Zahl gerade ist.
function istEineGeradeZahl(eingegebeneZahl) {

    if (eingegebeneZahl<=0){
        return 'Zahl muss größer als 0 sein.'
    }
    else{
        return (eingegebeneZahl % 2 === 0) ? `Die Zahl ${eingegebeneZahl} ist gerade!` : `Die Zahl ${eingegebeneZahl} ist ungerade!`;
    }
    
}
