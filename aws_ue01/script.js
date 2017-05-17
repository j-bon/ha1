$( document ).ready(function() {

    setVoltage();
    setAmperage();
    warningMaxAmpereage();

});

function setVoltage(){
    $('#voltage').text(genRandomNumber(220, 240));
}

function setAmperage(){
    max = parseFloat($('#maxAmperage').text()) + 5 ;
    $('#amperage').text(genRandomNumber(0, max));
}

function genRandomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function warningMaxAmpereage(){
    currentAmperage = parseFloat($('#amperage').text());
    maxAmperage = parseFloat($('#maxAmperage').text());
    if(currentAmperage > maxAmperage){
        $('#warningMaxAmperage').append('<p>Warnung! Aktueller Belastungswert liegt über dem Maximalwert. Kontaktieren Sie einen Techniker.</p>')
    }
}
