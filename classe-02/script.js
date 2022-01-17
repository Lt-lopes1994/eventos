const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('change', function (event) {
    const inputFinal = event.target;

    if (inputFinal.dataset.correto === inputFinal.value) {
      inputFinal.classList.add('acerto');
    } else {
      inputFinal.classList.add('errou')
    }
  })
})