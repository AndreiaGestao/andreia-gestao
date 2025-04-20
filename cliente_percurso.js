
function mostrarSecao(id) {
  document.querySelectorAll('.secao').forEach(sec => sec.classList.remove('ativa'));
  document.getElementById(id).classList.add('ativa');
}
