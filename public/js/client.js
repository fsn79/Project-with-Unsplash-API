const formSearch = document.querySelector('#formsearch');

if (formSearch) {
formSearch.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
  const { method, action, inputsearch } = event.target;
    const response = await fetch(action, {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        inputsearch: inputsearch.value,
      })
    })

    const data = await response.json();
    console.log(data);
    showData(data);

  } catch (error) {
    console.log(error);
  };
  formSearch.reset();
})
  const showData = (data) => {
    const container = document.querySelector('.container');
    const cont = document.querySelector('#cont');
     console.log();   
    container.parentNode.removeChild(container)

    let html = '';
    data.response.results.forEach(e => {
      html += `
      <div class="slide" style="background-image: url('${e.urls.regular}">
      <h3>${e.user.name}</h3>
      </div>
      `
    })
    cont.innerHTML = `<div class="container">${html}</div>`
    ;
    slidesPlugin(3)
  }
};


function slidesPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll('.slide');

  if (slides.length > 0) {
  slides[activeSlide].classList.add('active');

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses();
      slide.classList.add('active');
    })
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    })
  }
}
}


slidesPlugin(2)

