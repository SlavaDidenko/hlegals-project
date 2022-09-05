export default class ShowPublications {
  constructor(element , size) {
    this.size = size;
    this.length = 0;
    this.element = element;
  }

  showContent(data , button) {
    if (this.length < data.length) {
      const currentLength = this.length
      for (this.length; this.length < currentLength + this.size; this.length++) {
        if (this.length >= data.length) {
          button.parentElement.remove();
          return;
        }
        const { title, subtitle, text, img } = data[this.length];
        const li = document.createElement('li');
        li.classList.add('publications__card');
        li.classList.add('card');
        li.innerHTML = `
        <a href="#" class="card__content-img ${img ? '' : 'none'}">
        <picture>
          <!-- <source srcset="../dist/img/.webp" type="image/webp"> -->
          <img loading="lazy" src="${img}" width="414" height="233">
        </picture>
        </a>
        <div class="card__wrapper">
          <a href="#" class="card__title">${title}</a>
          <p class="card__subtitle">${subtitle}</p>
          <p class="card__text">${text}</p>
        </div>
        <a class="card__link" href="#"></a>
        `
        this.element.append(li);
      }
    } else {
        button.parentElement.remove();
        return;
    }
  }
}