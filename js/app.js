'use strict';
// let table = document.getElementById('table');
// console.log(hour)


let seattle = {
  name: 'seattle',
  minCust:23 ,
  maxCust:65 ,
  avgCookies:6.3,
  cfh:0,
  hSales:[],
  hour : ['6 am: ','7 am: ','8 am: ','9 am: ','10am: ','11 am: ','12 pm: ','1 pm: ','2 pm: ','3 pm: ','4 pm: ','5 pm: ','6pm:  ','7 pm: ','Total: '],

  cph : function () {

    return Math.floor(Math.random()*(this.maxCust-this.minCust + 1) + this.minCust);


  },
  calcPerHr :function(){
    return Math.floor(this.calcRandHrlyCust()*this.avgCookies);

  },

  hourlyTotal(){
    for (let i = 0; i <14; i++) {
      this.hSales[i] = this.cph();
      this.cfh += this.hSales[i];
    }
  },




  render: function(){
    this.hourlyTotal();

    let divE1  = document.getElementById('stores sale');
    let articlE1 = document.createElement('article');
    divE1.appendChild(articlE1);


    let h2E1 = document.createElement('h2');
    articlE1.appendChild(h2E1);
    h2E1.textContent = this.name;




    let ulE1 = document.createElement('ul');

    for (let i = 0; i < this.hour.length; i++) {

      let liE1 = document.createElement('li');
      liE1.textContent = this.hour[i];

      console.log(liE1.textContent = this.hour[i] , this.cph);

      ulE1.appendChild(liE1);



    }
    let nE1 = document.createElement('ul');
    for (let i = 0; i < this.hour.length; i++) {
      let n1E1 = document.createElement('sales');
      n1E1.textContent= this.cph[i];
      nE1.appendChild(n1E1);


      articlE1.appendChild(nE1);

      articlE1.appendChild(ulE1);
    }



  }

};

seattle.render();
