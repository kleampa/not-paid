(function() {
  /* cambia queste variabili a tuo piacimento */
  var due_date = new Date('2019-12-31');
  var days_deadline = 60;
  /* non cambiare da qui in poi */

  var current_date = new Date();
  var utc1 = Date.UTC(due_date.getFullYear(), due_date.getMonth(), due_date.getDate());
  var utc2 = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate());
  var days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));

  if (days > 0) {
    var days_late = days_deadline - days;
    var opacity = (days_late * 100 / days_deadline) / 100;
    opacity = (opacity < 0) ? 0 : opacity;
    opacity = (opacity > 1) ? 1 : opacity;
    if (opacity >= 0 && opacity <= 1) {
      document.getElementsByTagName("BODY")[0].style.opacity = opacity;
    }

    if (opacity > 0 && opacity <= 1) {
      if (days_late != 1) {
        alert("Il termine per effettuare il pagamento del compenso per la realizzazione di questo sito web, il quale era fissato per il " + due_date.getDate() + "/" + (due_date.getMonth() + 1) + "/" + due_date.getFullYear() + ", è scaduto. Questo sito web diventerà sempre più opaco e tra poco non sarà più possibile vederlo. Si hanno ancora " + days_late + " giorni di tempo per poter effettuare il pagamento prima che questo sito web diventi totalmente illeggibile");
      } else {
        alert("Il termine per effettuare il pagamento del compenso per la realizzazione di questo sito web, il quale era fissato per il " + due_date.getDate() + "/" + (due_date.getMonth() + 1) + "/" + due_date.getFullYear() + ", è scaduto. Questo sito web diventerà sempre più opaco e tra un giorno non sarà più possibile vederlo. Si ha ancora un giorno di tempo per poter effettuare il pagamento prima che questo sito web diventi totalmente illeggibile");
      }
    }

    if (opacity == 0) {
      alert("Tempo scaduto! Il pagamento non è stato effettuato nei tempi previsti ed ora il sito web non è più visibile");
    }

  }

})()
