var n = prompt("Введіть порядковий номер числа Фібоначі")

function fib(n) {
  var num;

  if (n >= 2) {
    num = fib(n - 1) + fib(n - 2);
  }
  else {
    num = n
  }

  return num;
}

alert(fib(n));