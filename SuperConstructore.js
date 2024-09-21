class Employee {
  constructor(company) {
    this.company = company;
  }
}
class Students extends Employee {
  constructor(id, name, company) {
    super(company);
    this.id = id;
    this.name = name;
  }
}

const emp = new Students(1, "jhon", "sdfasdfasdf");
console.log(emp);
