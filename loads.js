const guests = [
  { id: "1", name: "Familia Aguilar Son", passes: 4 },
  { id: "2", name: "Julia Fermina Aguilar Son", passes: 1 },
  { id: "3", name: "Familia David Pec", passes: 4 },
  { id: "4", name: "German Chaclan", passes: 2 },
  { id: "5", name: "Jorge Aguilar Son", passes: 1 },
  { id: "6", name: "Licenciado Juan Antonio Aguilar Son", passes: 3 },
  { id: "7", name: "Angel Ola", passes: 3 },
  { id: "8", name: "Estela Ajanel", passes: 1 },
  { id: "9", name: "Julia Ajanel Puac", passes: 1 },
  { id: "10", name: "Familia Milton Sapon Juarez", passes: 4 },
  { id: "11", name: "Valeska Cute", passes: 3 },
  { id: "12", name: "Ingeniero Juan Jose Puac Aguilar", passes: 4 },
  { id: "13", name: "Angel Ola Sapon", passes: 4 },
  { id: "14", name: "Armando Aguilar Alvarado", passes: 4 },
  { id: "15", name: "Julio Urizar", passes: 4 },
  { id: "16", name: "Feliz Mutz Aguilar", passes: 4 },
  { id: "17", name: "Ingeniero Otto Vinicio Zavala Azmitia", passes: 2 },
  { id: "18", name: "Ingeniero Acxel de León", passes: 2 },
  { id: "19", name: "Ingeniero Elvis Willians Jonas Chajon Turcios", passes: 2 },
  { id: "20", name: "Ingeniero Cesar Omar Barrios Salazar", passes: 2 },
  { id: "21", name: "Henry Edelmiro Escobar Arias", passes: 2 },
  { id: "22", name: "Licenciado Marlon Emanuel Milian Milian", passes: 1 },
  { id: "23", name: "Ingeniero Gregorio Amadeo Escobar", passes: 1 },
  { id: "24", name: "Jorge Adolfo Castillo Galindo", passes: 4 },
  { id: "25", name: "Dalia Marisol Guzman Sanchez", passes: 1 },
  { id: "26", name: "Ingeniero Wellington Castañeda", passes: 2 },
  { id: "27", name: "Licenciado Eddson Wuilberto Xicay Orozco", passes: 1 },
  { id: "28", name: "Licenciado Selvin Arturo Son Puac", passes: 3 },
  { id: "29", name: "Erick Sapon", passes: 2 },
  { id: "30", name: "Heber Caniz", passes: 3 },
  { id: "31", name: "Ingeniero Bidkar Baten", passes: 1 },
  { id: "32", name: "Ingeniero Luis Barrios", passes: 1 },
  { id: "33", name: "Ingeniero Cayetenado Alvarado", passes: 2 },
  { id: "34", name: "Williams Puac", passes: 1 },
  { id: "35", name: "Mario de León", passes: 2 },
  { id: "36", name: "Axel Cos", passes: 1 },
  { id: "37", name: "Ingeniero Oscar Ambrocio", passes: 2 },
  { id: "38", name: "Familia Ortiz Morales", passes: 4 },
  { id: "39", name: "Familia Bautista Gomez", passes: 4 },
  { id: "40", name: "Familia Tuch Batres", passes: 5 },
  { id: "41", name: "Familia Requena Mazariegos", passes: 2 },
  { id: "42", name: "Familia Santizo Merida", passes: 4 },
  { id: "43", name: "Diana Laura Perez", passes: 1 },
  { id: "44", name: "Familia Hewin Argueta", passes: 4 },
  { id: "45", name: "Familia Bravo Giron", passes: 5 },
  { id: "46", name: "Familia de León Girón", passes: 3 },
  { id: "47", name: "Familia Girón Mazariegos", passes: 2 },
  { id: "48", name: "Magdalena Mazariegos", passes: 2 },
  { id: "49", name: "Familia Pérez Alvarado", passes: 5 },
  { id: "50", name: "Familia Velasquez", passes: 2 },
  { id: "51", name: "Joven Moises Chan", passes: 1 },
  { id: "52", name: "Señorita Dorcas Macario", passes: 1 },
  { id: "53", name: "Familia Lopez", passes: 2 },
  { id: "54", name: "Familia Giron Ramos", passes: 3 },
  { id: "55", name: "Familia Huertas Ramires", passes: 2 },
  { id: "56", name: "Familia Girón Telón", passes: 2 },
  { id: "57", name: "Familia Telón Mazariegos", passes: 3 },
  { id: "58", name: "Familia Lopéz Telón", passes: 2 },
  { id: "59", name: "Familia Tzul Huizt", passes: 2 },
  { id: "60", name: "Familia González", passes: 3 },
  { id: "61", name: "Familia Hernández", passes: 2 },
  { id: "62", name: "Familia Velásquez Mejía", passes: 2 },
  { id: "63", name: "Familia Orozco Chanchavac", passes: 4 },
  { id: "64", name: "Fidelia Sapon Juárez", passes: 1 }
];

  document.addEventListener("DOMContentLoaded", function () {
    function getQueryParams() {
      const params = {};
      const queryString = window.location.search.substring(1);
      if (!queryString) return params;
  
      const pairs = queryString.split("&");
      for (const pair of pairs) {
        const [key, value] = pair.split("=");
        params[decodeURIComponent(key)] = decodeURIComponent((value || "").replace(/\+/g, " "));
      }
      return params;
    }
  
    const queryParams = getQueryParams();
    const guestId = queryParams.id;
  
    const guest = guests.find(g => g.id === guestId);
  
    if (guest) {
      // 👇 DISPONIBLE PARA script.js (WhatsApp, etc.)
      window.currentGuest = guest;
  
      let invitText = "";
  
      if (guest.passes === 1) {
        invitText = guest.gender === "femenino"
          ? `¡${guest.name}, está invitada!`
          : `¡${guest.name}, está invitado!`;
      } else {
        if (guest.gender === "femenino") {
          invitText = `¡${guest.name}, están invitadas!`;
        } else {
          invitText = `¡${guest.name}, están invitados!`;
        }
      }
  
      const guestNameEl = document.getElementById("guest-name");
      const passesEl = document.getElementById("passes");
  
      if (guestNameEl) guestNameEl.textContent = invitText;
      if (passesEl) passesEl.textContent = `${guest.passes} ${guest.passes === 1 ? "pase" : "pases"}`;
    } else {
      window.currentGuest = null;
  
      const guestNameEl = document.getElementById("guest-name");
      if (guestNameEl) guestNameEl.textContent = "¡Invitado no encontrado!";
  
      const section = document.querySelector(".invitation-info-section");
      if (section) section.style.display = "none";
    }
  });
  