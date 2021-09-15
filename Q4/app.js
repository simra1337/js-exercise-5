const obj1 = {
	name: 'Simra',
	age: '23',
	address: 'Najibabad',
};

const obj2 = Object.assign({}, obj1);

console.log('obj1 Details are : ' + JSON.stringify(obj1) + '\n');
console.log('obj2 Details are : ' + JSON.stringify(obj2));