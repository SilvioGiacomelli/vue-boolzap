const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: [
        {
          name: 'Michele',
          avatar: 'img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: 'img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: 'img/avatar_3.jpg',
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: 'img/avatar_4.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: 'img/avatar_5.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          name: 'Claudia',
          avatar: 'img/avatar_6.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Federico',
          avatar: 'img/avatar_7.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Davide',
          avatar: 'img/avatar_8.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received'
            }
          ],
        }
      ],
      searchQuery: '', // Aggiunto per la ricerca
      currentChatIndex: 0,
      newMessage: '',
    };
  },
  computed: {
    filteredContacts() {
      return this.searchQuery
        ? this.contacts.filter(contact => 
            contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
        : this.contacts;
    },
    currentChat() {
      return this.contacts[this.currentChatIndex].messages;
    },
  },
  methods: {
    selectChat(index) {
      const selectedUser = this.filteredContacts[index];
      this.currentChatIndex = this.contacts.findIndex(contact => contact.name === selectedUser.name);
    },
    sendNewMessage() {
    // Verifica se il messaggio non è vuoto
    if (this.newMessage.trim() !== '') {
    // Crea un nuovo oggetto messaggio con la data corrente, il testo del messaggio e lo stato "sent"
    const newMsg = {
      date: new Date().toLocaleString(), // Ottiene la data corrente formattata come stringa
      message: this.newMessage, // Testo del messaggio inserito dall'utente
      status: 'sent' // Stato del messaggio (inviato)
  };
  
  // Aggiunge il nuovo messaggio alla lista dei messaggi del contatto corrente
  this.contacts[this.currentChatIndex].messages.push(newMsg);

  // Resetta il campo di input del messaggio dopo l'invio
  this.newMessage = '';

  // Simula una risposta dopo un secondo
  setTimeout(() => {
    // Crea un nuovo messaggio di risposta con la data corrente, un testo predefinito ("Ok") e lo stato "received"
    const replyMsg = {
      date: new Date().toLocaleString(), // Ottiene la data corrente formattata come stringa
      message: 'Ok', // Testo di risposta predefinito
      status: 'received' // Stato del messaggio di risposta (ricevuto)
    };
    
    // Aggiunge il messaggio di risposta alla lista dei messaggi del contatto corrente dopo un secondo
    this.contacts[this.currentChatIndex].messages.push(replyMsg);
  }, 1000); // Attendi 1 secondo prima di inviare la risposta automatica
  }
  }
  }
}).mount('#app')