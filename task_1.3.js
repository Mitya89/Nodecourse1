const purchaseQuantity = 20;
const unitCostPrice = 15;
const deliveryCosts = 15;
const productPrice = 45;
const month = 'april';

const income = productPrice * purchaseQuantity;
const expenses = unitCostPrice * purchaseQuantity + deliveryCosts;
const profit = income - expenses;
const message = `Добрый день, Евгений Павлович. Высылаю отчет за ${month}. 
В этом месяце наши доходы составили ${income}. Наши расходы 
составили ${expenses}. Наша прибыль - ${profit}`;

console.log(message);
