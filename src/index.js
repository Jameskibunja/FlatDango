const baseUrl = "http://localhost:3000/films";

function loadFilm() {
  
  fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      return getfilms(data);
    });
}
loadFilm();
const getfilms = (films) => {
  films.forEach((film) => {
    
    const list = document.createElement("li");
    const title = document.querySelector("#films");

    list.textContent = film.title;
    title.appendChild(list);

    list.addEventListener("click", () => {
      const imgPic = (document.getElementById("poster").src = film.poster);
      console.log(imgPic);

      const title = document.querySelector("#title");
      title.textContent = film.title;

      const duration = document.querySelector("#runtime");
      duration.textContent = `${film.runtime} Minutes`;

      const description = document.querySelector("#film-info");
      description.textContent = film.description;

      const showtime = document.querySelector("#showtime");
      showtime.textContent = film.showtime;

      let remainingTickets = document.querySelector("#ticket-num");
      let availSeats = film.capacity - film.tickets_sold;
      remainingTickets.textContent = availSeats;

      const buyTicket = document.querySelector("#buy-ticket");
      buyTicket.addEventListener("click", (btn) => {
        let calc = document.querySelector(".extra-content");
        let button = document.createElement("button");
        let input = document.createElement("input");
        input.setAttribute("placeholder", "How many tickets do you want?");
        input.setAttribute("onblur", "getVal()");

        function getVal() {
          return (value = input.value);
        }
        button.textContent = "Submit";
        input.innerHTML = btn.inputs;
        calc.appendChild(input);
        calc.appendChild(button);

        button.addEventListener("click", () => {
          let remain = availSeats - getVal();
          console.log(remain);
          if (remain > 0) {
            remainingTickets.textContent = remain;
            alert(`Thank you for purchasing ${getVal()} tickets`);
          } else {
            return "No Tickets";
          }
        });
      });
    });
  });
};


