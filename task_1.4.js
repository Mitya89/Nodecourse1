
const firstItem = 5;
const secondItem = 5;
let exponent = firstItem ** secondItem;

if ((typeof exponent === 'number') && (exponent === exponent)) {
    console.log(exponent);
}
else { console.log("Несоответствующий тип данных");
}