$( document ).ready(function() {

    setVoltage();
    setAmperage();
    warningMaxAmpereage();
    
    $("#readSubmit").click(read);

});

function setVoltage(){
    $('#voltage').text(genRandomNumber(220, 240));
}

function setAmperage(){
    max = parseFloat($('#maxAmperage').text()) + 5 ;
    $('#amperage').text(genRandomNumber(0, max));
}

function genRandomNumber(min, max){
    return Math.round((Math.random()*(max-min+1)+min)*10)/10;
}

function warningMaxAmpereage(){
    currentAmperage = parseFloat($('#amperage').text());
    maxAmperage = parseFloat($('#maxAmperage').text());
    if(currentAmperage > maxAmperage){
        $('#warningMaxAmperage').append('<p>Warnung! Aktueller Belastungswert liegt über dem Maximalwert. Kontaktieren Sie einen Techniker.</p>')
    }
}

function read() {
    nutz = $('#nutz').val();
    aver = $('#aver').val();
    date = new Date();

    $("#detailstable").append(
        "<tr>" +
        "<td>" + nutz + 
        "<td>" + aver +
        "<td>" + date.getDate() + "." + date.getMonth() + "." + date.getFullYear() + 
        "</tr>"
    );
}