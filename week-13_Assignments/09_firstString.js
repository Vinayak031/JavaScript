const arr = [1, 2, 999, 56, 'mithun', 1234, 'pw'];

for (let index = 0; index < arr.length; index++) {
    if (typeof arr[index] === 'string') {
        console.log(arr[index]);
        break;
    }
}