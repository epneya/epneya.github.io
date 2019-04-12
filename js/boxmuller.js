const mu = document.getElementById('mu'),
      sigma = document.getElementById('sigma'),
      output = document.getElementById('output'),
      round = document.getElementById('round');

function boxmuller() {
  let m = mu.value == '' ? 0 : mu.value;
  let s = sigma.value == '' ? 1 : sigma.value;

  let n = parseInt(m) + parseInt(s) * (Math.sqrt(-2 * Math.log(Math.random())) * Math.cos(2 * Math.PI * Math.random()));


  output.innerHTML = round.checked ? Math.round(n) : n;
}
