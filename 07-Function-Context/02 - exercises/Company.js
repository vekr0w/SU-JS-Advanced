class Company {
  constructor() {
    this.departments = [];
  }
  addEmployee(name, salary, position, department) {
    this.validate(name, salary, position, department);

    if (!this.departments[department]) {
      this.departments[department] = [];
    }
    this.departments[department].push({ name, salary, position });

  }

  validate(name, salary, position, department) {
    if ((name && position && department) && salary >= 0) {
      // console.log(`New employee is hired. Name: ${name}. Position: ${position}`);
    } else {
      throw new Error("Invalid input!");
    }
  }

  bestDepartment() {
    let depAvrg = {};
    Object.entries(this.departments).forEach(([department, employees]) => {
      let totalSalary = employees
        .map(e => e.salary)
        .reduce((acc, curr) => acc += curr);
      depAvrg[department] = totalSalary / employees.lenght;
      console.log(employees);
    });
    let highestAvg;

    Object.entries(depAvrg).forEach(([depAvrg,avgSalary])=>{

    });
  }



}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

// console.log(c);



