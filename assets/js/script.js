// Diese Funktion ueberprueft , ob die Zahl gerade ist.
function istEineGeradeZahl(eingegebeneZahl) {
    if (eingegebeneZahl <= 0) {
        return 'Zahl muss größer als 0 sein.';
    } else {
        return (eingegebeneZahl % 2 === 0) ? `Die Zahl ${eingegebeneZahl} ist gerade!` : `Die Zahl ${eingegebeneZahl} ist ungerade!`;
    }
}

$(document).ready(function() {
    $('#checkButton').click(function() {
        let eingegebeneZahl = $('#numberInput').val();
        
        if (eingegebeneZahl === '' || isNaN(eingegebeneZahl)) {
            $('#result').text('Bitte geben Sie eine gültige Zahl ein!');
        } else {
            eingegebeneZahl = parseInt(eingegebeneZahl);
            let result = istEineGeradeZahl(eingegebeneZahl); 
            $('#result').text(result);
        }
    });
});

$('.flip-button').on('click', function () {
    $(this).toggleClass('flipped'); 
});
