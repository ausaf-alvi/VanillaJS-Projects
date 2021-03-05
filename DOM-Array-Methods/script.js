 const main = document.getElementById('main');
 const addUserBtn = document.getElementById('add-user');
 const doubleBtn = document.getElementById('double');
 const showMillionairesBtn = document.getElementById('show-millionaires');
 const calculateWealthBtn = document.getElementById('calculate-wealth');
 const sortBtn = document.getElementById('sort');
 
 let data = [];

getRandomUser();
getRandomUser();
getRandomUser();


 //fetch random user and add money
  async function getRandomUser(){
    //  fetch('https://randomuser.me/api').then( res => res.json()).then(data =>{
         
    //  })
    //Using aync/await
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json()

    // console.log(data);

    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        gender: `${user.gender}`,
        money: Math.floor(Math.random() * 100000)
    };
    // console.log(newUser);
    addData(newUser);
 }

 function addData(obj){
     data.push(obj);

     updateDOM();
 }

//  console.log(data);

 function updateDOM(providedData = data){
    //clear the main div
    main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';

    // for(i=0;i<providedData.length;i++){
    //     item = providedData[i];
    //     const element = document.createElement('div');
    //     element.classList.add('person');
    //     element.innerHTML = `<strong>${item.name}</strong>${item.money}`;
    //     main.appendChild(element);
    // }
  
    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong>${formatMoney(item.money)}`;
        main.appendChild(element);
    });

 }


//Double everyone's money
function doubleMoney(){
    data = data.map(user => {
        return {...user, money:user.money*2};
    });
    updateDOM();
}

 //Format number as money
 function formatMoney(num){
     // (12345.67).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
    return '$ ' + (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
 }

 //Calculate total wealth
 function calculateWealth(){
     const totalWealth = data.reduce((acc , user) => (acc += user.money),0 );
    //  console.log(totalWealth);
    //  console.log(totalWealth.money);
     const totalEl = document.createElement("div");
     totalEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(totalWealth)}</strong></h3>`;
     updateDOM();
     main.appendChild(totalEl);
     
 }
//Show only Millionaires
function showMillionaires(){
    data = data.filter(user => user.money>1000000);
    // console.log(data);
    updateDOM();
}

 //Sort by richest
function sortByRichest(){
    data.sort((a, b) => b.money - a.money);
    updateDOM();
}
 // Event Listeners
 addUserBtn.addEventListener('click' , getRandomUser);
 doubleBtn.addEventListener('click',doubleMoney);
 sortBtn.addEventListener('click', sortByRichest);
 showMillionairesBtn.addEventListener('click',showMillionaires);
 calculateWealthBtn.addEventListener('click', calculateWealth);
//  doubleBtn.addEventListener("mouseenter",doubleMoney);
//  doubleBtn.addEventListener("mouseleave",doubleMoney);