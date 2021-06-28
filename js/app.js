'use strict';
// let table = document.getElementById('table');
// console.log(hour)


let seattle = {
  name: 'seattle',
  minCust:23 ,
  maxCust:65 ,
  avgCookies:6.3,
  cfh:0,
  // costumer For Hour
  hSales:[],
  // hourly sales
  hour : ['6 am: ','7 am: ','8 am: ','9 am: ','10am: ','11 am: ','12 pm: ','1 pm: ','2 pm: ','3 pm: ','4 pm: ','5 pm: ','6pm:  ','7 pm: '],

  // costumer per hour
  cph : function () {

    return Math.floor(Math.random()*(this.maxCust-this.minCust + 1) + this.minCust);


  },
  calcPerHr :function(){
    return Math.floor(this.cph()*this.avgCookies);

  },

  hourlyTotal(){
    for (let i = 0; i <14; i++) {
      this.hSales[i] = this.cph();
      this.cfh += this.hSales[i];
    }
  },




  render: function(){
    this.hourlyTotal();

    // let divE1  = document.getElementById('stores sale');



    // let h2E1 = document.createElement('h2');
    // divE1.appendChild(h2E1);
    // h2E1.textContent = this.name;



    let divul = document.getElementById('list');
    let ulE1 = document.createElement('ul');
    let h2l1 = document.createElement('h2');
    h2l1.textContent = (this.name);
    divul.appendChild(h2l1);
    divul.appendChild(ulE1);

    for (let i = 0; i < this.hour.length; i++) {

      let liE1 = document.createElement('li');
      liE1.textContent = this.hour[i]+this.cph();

      ulE1.appendChild(liE1);



    }

    let total = this.cfh;
    console.log(total);
    let tCookies = document.createElement('li');
    divul.appendChild(tCookies);
    tCookies.textContent = ('Toatal' + this.cfh);



  }

};

seattle.render();







let tokyo = {
  name: 'tokyo',
  minCust:23 ,
  maxCust:65 ,
  avgCookies:6.3,
  cfh:0,
  // costumer For Hour
  hSales:[],
  // hourly sales
  hour : ['6 am: ','7 am: ','8 am: ','9 am: ','10am: ','11 am: ','12 pm: ','1 pm: ','2 pm: ','3 pm: ','4 pm: ','5 pm: ','6pm:  ','7 pm: '],

  // costumer per hour
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

    // let divE1  = document.getElementById('stores sale');



    // let h2E1 = document.createElement('h2');
    // divE1.appendChild(h2E1);
    // h2E1.textContent = this.name;



    let divul = document.getElementById('list');
    let ulE1 = document.createElement('ul');
    let h2l1 = document.createElement('h2');
    h2l1.textContent = (this.name);
    divul.appendChild(h2l1);
    divul.appendChild(ulE1);

    for (let i = 0; i < this.hour.length; i++) {

      let liE1 = document.createElement('li');
      liE1.textContent = this.hour[i]+this.cph();

      ulE1.appendChild(liE1);



    }

    let total = this.cfh;
    console.log(total);
    let tCookies = document.createElement('li');
    divul.appendChild(tCookies);
    tCookies.textContent = ('Toatal' + this.cfh);



  }

};

tokyo.render();





let dubai = {
  name: 'dubai',
  minCust:23 ,
  maxCust:65 ,
  avgCookies:6.3,
  cfh:0,
  // costumer For Hour
  hSales:[],
  // hourly sales
  hour : ['6 am: ','7 am: ','8 am: ','9 am: ','10am: ','11 am: ','12 pm: ','1 pm: ','2 pm: ','3 pm: ','4 pm: ','5 pm: ','6pm:  ','7 pm: '],

  // costumer per hour
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

    // let divE1  = document.getElementById('stores sale');



    // let h2E1 = document.createElement('h2');
    // divE1.appendChild(h2E1);
    // h2E1.textContent = this.name;



    let divul = document.getElementById('list');
    let ulE1 = document.createElement('ul');
    let h2l1 = document.createElement('h2');
    h2l1.textContent = (this.name);
    divul.appendChild(h2l1);
    divul.appendChild(ulE1);

    for (let i = 0; i < this.hour.length; i++) {

      let liE1 = document.createElement('li');
      liE1.textContent = this.hour[i]+this.cph();

      ulE1.appendChild(liE1);



    }

    let total = this.cfh;
    console.log(total);
    let tCookies = document.createElement('li');
    divul.appendChild(tCookies);
    tCookies.textContent = ('Toatal' + this.cfh);



  }

};

dubai.render();





let paris = {
  name: 'paris',
  minCust:23 ,
  maxCust:65 ,
  avgCookies:6.3,
  cfh:0,
  // costumer For Hour
  hSales:[],
  // hourly sales
  hour : ['6 am: ','7 am: ','8 am: ','9 am: ','10am: ','11 am: ','12 pm: ','1 pm: ','2 pm: ','3 pm: ','4 pm: ','5 pm: ','6pm:  ','7 pm: '],

  // costumer per hour
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

    // let divE1  = document.getElementById('stores sale');



    // let h2E1 = document.createElement('h2');
    // divE1.appendChild(h2E1);
    // h2E1.textContent = this.name;



    let divul = document.getElementById('list');
    let ulE1 = document.createElement('ul');
    let h2l1 = document.createElement('h2');
    h2l1.textContent = (this.name);
    divul.appendChild(h2l1);
    divul.appendChild(ulE1);

    for (let i = 0; i < this.hour.length; i++) {

      let liE1 = document.createElement('li');
      liE1.textContent = this.hour[i]+this.cph();

      ulE1.appendChild(liE1);



    }

    let total = this.cfh;
    console.log(total);
    let tCookies = document.createElement('li');
    divul.appendChild(tCookies);
    tCookies.textContent = ('Toatal' + this.cfh);



  }

};

paris.render();






let lima = {
  name: 'lima',
  minCust:23 ,
  maxCust:65 ,
  avgCookies:6.3,
  cfh:0,
  // costumer For Hour
  hSales:[],
  // hourly sales
  hour : ['6 am: ','7 am: ','8 am: ','9 am: ','10am: ','11 am: ','12 pm: ','1 pm: ','2 pm: ','3 pm: ','4 pm: ','5 pm: ','6pm:  ','7 pm: '],

  // costumer per hour
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

    // let divE1  = document.getElementById('stores sale');



    // let h2E1 = document.createElement('h2');
    // divE1.appendChild(h2E1);
    // h2E1.textContent = this.name;



    let divul = document.getElementById('list');
    let ulE1 = document.createElement('ul');
    let h2l1 = document.createElement('h2');
    h2l1.textContent = (this.name);
    divul.appendChild(h2l1);
    divul.appendChild(ulE1);

    for (let i = 0; i < this.hour.length; i++) {

      let liE1 = document.createElement('li');
      liE1.textContent = this.hour[i]+this.cph();
      ulE1.appendChild(liE1);



    }

    let total = this.cfh;
    console.log(total);
    let tCookies = document.createElement('li');
    divul.appendChild(tCookies);
    tCookies.textContent = ('Toatal' + this.cfh);



  }

};

lima.render();


























