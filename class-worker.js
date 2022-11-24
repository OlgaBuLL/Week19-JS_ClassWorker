class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    let totalSalary = this.rate * this.days;
    document.querySelector(".totalSalary").innerText = totalSalary;
    return totalSalary;
  }
}

let worker = new Worker("Olga", "Bulgakova", 2000, 28);
worker.getSalary();

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
// console.log(worker1.rate * worker1.days);
console.log(worker.getSalary());
