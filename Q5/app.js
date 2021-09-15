const employees = [
	{ name: 'Shimmu', age: 21, salary: 4003, dob: '17-02-1996' },
	{ name: 'Anshul', age: 34, salary: 7500, dob: '12-05-1992' },
	{ name: 'Pragyesh', age: 19, salary: 5200, dob: '22-07-1994' },
	{ name: 'Harshil', age: 34, salary: 8000, dob: '22-07-1994' },
	{ name: 'Danish', age: 22, salary: 5000, dob: '23-07-1966' },
	{ name: 'Ali', age: 29, salary: 300, dob: '11-07-1992' },
	{ name: 'Hashim', age: 45, salary: 400, dob: '13-07-1991' },
	{ name: 'Steve', age: 52, salary: 2700, dob: '14-07-1997' },
    { name: 'Samar', age: 74, salary: 4500, dob: '15-07-1992' },
    { name: 'Saksham', age: 74, salary: 1500, dob: '17-07-1994' },

];

const bigEmployees = employees.filter((emp) => emp.salary >= 5000);
console.log('=================== Ques 5 (b) - Solution ===============\n');
console.log('Employee with salary > 5000');
console.log(bigEmployees);
console.log('\n=========================================================\n');

function generatetemp(age) {
	const rem = age % 10;
	const q = parseInt(age / 10);
	let temp = '';

	if (rem >= 1 && rem <= 5) {
		temp = `${q * 10 + 1}-${q * 10 + 5}`;
	} else if (rem === 0) {
		temp = `${q * 10 - 4}-${q * 10}`;
	} else {
		temp = `${q * 10 + 6}-${(q + 1) * 10}`;
	}

	return temp;
}

const grpdByAge = employees.reduce((acc, emp) => {
	const temp = generatetemp(emp.age);
	if (temp in acc) {
		acc[temp] = [...acc[temp], emp];
	} else {
		acc[temp] = [emp];
	}
	return acc;
}, {});
console.log('================ Ques 5 (c) - Solution ===================\n');
console.log('Employees grouped by their age :');
console.log(grpdByAge);
console.log('\n========================================================\n');
const salaryIncrement = employees.filter((emp) => {
	if (emp.age > 20 && emp.salary < 1000) {
		emp.salary *= 5;
		return true;
	}
	return false;
});
console.log(
	'============================ Ques 5 (d) - Solution =========================\n'
);
console.log(
	'Employee with their salary incremented if their age > 20 and salary < 1000'
);
console.log(salaryIncrement);
console.log('\n================================================');