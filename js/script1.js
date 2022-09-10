
//      Task 1
let positions = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];
let names = [];
function getNames() {
	for(i = 0; i <positions.length; i++) {
		// names[i] = prompt("Введіть будь ласка ім'я працівника на посаду " + positions[i]);  // Один з варіантів 
		names.push(prompt("Введіть будь ласка ім'я працівника на посаду " + positions[i]));
	}
};
// getNames()

// // console.log(names)
// // console.log(positions)


// // Тестовий масив
names = ['Рома', 'Андрій', 'Генадій', 'Дмитро', 'Максим', 'Олексій', 'Владислав']

//      Task 2
var team = {};

function createTeam(){
	for(i = 0; i < positions.length; i++) {
		team[(i + 1)] = {
			name: names[i],
			position: positions[i],
		}
	}
};
createTeam()

console.log(team)

//      Task 3

function setSalary(){
	for(var key in team){
		if(!team[key].position.toLowerCase().indexOf('junior')) {
			let salary = Math.ceil(Math.random() * 501) + 499; // Math.ceil(Math.random() * 501) повертає значення від 1 до 501!
			team[key].salary = salary;
		} else if(!team[key].position.toLowerCase().indexOf('middle')) {
			let salary = Math.ceil(Math.random() * 501) + 1499;
			team[key].salary = salary;
		} else if(!team[key].position.toLowerCase().indexOf('senior')) {
			let salary = Math.ceil(Math.random() * 501) + 2499;
			team[key].salary = salary;
		} else {
			let salary = Math.ceil(Math.random() * 501) + 3999;
			team[key].salary = salary;
		}
	}
};
setSalary()

//      Task 4

for(var key in team){
	team[key].tellAboutYourSelf = function (){
		alert(`Мене звуть ${this.name} і я ${this.position}. Я заробляю ${this.salary} $`)
	}
}
console.log("Для того щоб отримати інформацію про конкретного співробітника скористайтесь 'team[i].tellAboutYourSelf()'")
// team[4].tellAboutYourSelf() // Перевірка роботи четвертого завдання

//      Task 5

team.showTeam = function() {
	for(let i = 1; i <= positions.length; i++) {
		console.log(`${team[i].name} - ${team[i].position}. Зарплата ${team[i].salary}`)
	}
}
console.log("Для того щоб отримати інформацію про всіх співробітників скористайтесь 'team.showTeam()'")
// team.showTeam() // вивідінформації про всіх співробітників
