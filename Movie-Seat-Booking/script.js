var container = document.querySelector('.container');
var seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;
// console.log(ticketPrice);



populateUI();

//update total selected seats
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // console.log(selectedSeats);//it gives a node list of all selected seats
    const selectedSeatsCount = +selectedSeats.length;
    
    //[...variableName] cusing spread operator
    //converting the nodelist into an array
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
    // console.log(seatsIndex);

    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));

    count.innerText = selectedSeatsCount;
    // console.log(typeof selectedSeatsCount);
    total.innerText = selectedSeatsCount*ticketPrice;

}
//save selected movie index and price
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('SelectedMovieIndex',movieIndex);
    localStorage.setItem('SlectedMoviePrice',moviePrice);
}

//movie select event
movieSelect.addEventListener('change', e =>{
    ticketPrice = +e.target.value;
    // console.log(e.target.selectedIndex);
    // console.log(e.target.value);
    setMovieData(e.target.selectedIndex,e.target.value);
    updateSelectedCount();
});

 //seats click event
container.addEventListener('click',(e)=>{
    // console.log(e.target);
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        // console.log(e.target);
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

//get data from local storage and populate UI
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    console.log(selectedSeats);

    if(selectedSeats !== null && selectedSeats.length>0){
        seats.forEach((seat,index) => {
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

//initial count and total set
updateSelectedCount();