function zrobCos() {
  var numer = $('#numer').val();
  if (numer>42) {
    $('#wynik').html('Liczba większa od 42');
  }
  else if (numer<1) {
    $('#wynik').html('Liczba mniejsza od 1');
  }
  else {
    $('#wynik').html('Podana przez Ciebie liczba to ' + numer);
  }
  for (var i=0; i<6; i++) {
      var number = Math.floor((Math.random() * 42) + 1);
      $('#liczby').append('<li>'+ number +'</li>');
      if (number==numer) {
        $('#szczesliwy').html('Brawo! Wśród wylosowanych liczb jest Twój szczęśliwy numerek ('+ numer + ')');
      }
    }
}

$('#guzik').click(zrobCos);
