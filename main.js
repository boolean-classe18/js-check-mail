// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato

// creo un array con la lista di email degli invitati
var lista_email = ['pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com', 'topolino@gmail.com', 'paperone@gmail.com'];
console.log(lista_email);

// chiedo all'utente la sua email
var email_utente = prompt('Inserisci la tua email');
console.log('Email utente = ' + email_utente);

// predispongo una variabile sentinella che memorizza se ho trovato la mail dell'utente oppure no
var email_trovata = false;

// scorro l'array con la lista degli invitati
for (var i = 0; i < lista_email.length && !email_trovata; i++) {
    // recupero la mail corrente di questa iterazione
    var email_corrente = lista_email[i];
    console.log('Email corrente in posizione ' + i + ' = ' + email_corrente);
    // verifico se la mail corrente è uguale alla mail dell'utente
    if(email_corrente == email_utente) {
        // le due email sono uguali => ho trovato la mail dell'utente!!
        email_trovata = true;
    }
}

console.log('è stata trovata la email? ', email_trovata);

if(email_trovata) {
    // se ho trovato la mail dell'utente nell'array => stampo "ci sei"
    console.log('Sei in lista, puoi entrare!');
} else {
    // altrimenti => stampo "non ci sei"
    console.log('Non sei il lista, mi spiace!');
}
