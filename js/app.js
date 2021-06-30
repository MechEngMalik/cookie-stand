'use strict';

let hour = ['6 am: ','7 am: ','8 am: ','9 am: ','10 am: ','11 am: ','12 pm: ','1 pm: ','2 pm: ','3 pm: ','4 pm: ','5 pm: ','6pm:  ','7 pm: '];
let all =[];
function Sales(name,minCust,maxCust,avgCookies){
  this.name= name;
  this.minCust = minCust ;
  this.maxCust= maxCust ;
  this.avgCookies= avgCookies;
  this.cfh=0;

  this.hSales =[];

  all.push(this);
}

Sales.prototype.cph = function () {

  return Math.floor(Math.random()*(this.maxCust-this.minCust + 1) + this.minCust);
};
Sales.prototype.calcPerHr = function(){
  return Math.floor(this.cph()*this.avgCookies);
};
Sales.prototype.hourlyTotal = function (){
  for (let i = 0; i <5; i++) {



  }
};


Sales.prototype.render = function(){
  this.hourlyTotal();




  let tr1 = document.createElement('tr');

  let th2 = document.createElement('th');
  th2.textContent = this.name;
  tr1.appendChild(th2);

  {for (let i = 0; i < hour.length; i++) {

    let td1 = document.createElement('td');
    td1.textContent = this.cph();
    let cphTotal = this.cph();
    let dailyTotal =+cphTotal;


    tr1.appendChild(td1);

    table1.appendChild(tr1);}
  }



};


Sales.prototype.render1 = function(){
  this.hourlyTotal();




  let tr1 = document.createElement('tr');

  let th2 = document.createElement('th');
  th2.textContent = this.name;
  tr1.appendChild(th2);

  {for (let i = 0; i < hour.length; i++) {

    let td1 = document.createElement('td');
    td1.textContent = this.hourlyTotal();

    tr1.appendChild(td1);

    table1.appendChild(tr1);}
  }



};



let cOfTable = document.getElementById('list');
let table1 = document.createElement('table');
cOfTable.appendChild(table1);






let tr2 = document.createElement('tr');
let th2 = document.createElement('th');
th2.textContent = 'location';
tr2.appendChild(th2);

table1.appendChild(tr2);



{for (let i = 0; i < hour.length; i++) {



  let th1 = document.createElement('th');
  th1.textContent = hour[i];

  tr2.appendChild(th1);

  table1.appendChild(tr2);
}
let sr = document.createElement('tr');
let ths = document.createElement('th');
ths.textContent = 'Daily Location Total';
tr2.appendChild(ths);
table1.appendChild(tr2);
}




let seattle = new Sales('seattle',23,65,6.2);
let tokyo = new Sales ('tokyo',3,24,1.2);
let paris = new Sales('paris',11,38,3.7);
let dubai = new Sales('dubai',20,38,2.3);
let lama = new Sales('lama',2,16,4.6);

seattle.render();
tokyo.render();
paris.render();
dubai.render();
lama.render();

// let sut = document.createElement('tr');
//     let th3 = document.createElement('th');
//     th3.textContent = 'Total';
//     th3.appendChild(sut);
//     table1.appendChild(th3)



let storForm = document.getElementById('Sform');
storForm.addEventListener('submit',addstore);
function addstore(event) {
  event.preventDefault();

  let storeName = event.target.storeName.value;
  let minC = event.target.mincust.value;
  let maxC = event.target.maxcust.value;
  let avgN = event.target.avgCookies.value;

  let newStore = new Sales (storeName, minC, maxC, avgN);
  newStore.render();
  console.log('non');
}
let total = new Sales('total' ,2,16,4.6);
total.render1();




















