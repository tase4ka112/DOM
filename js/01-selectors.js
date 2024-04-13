/**
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

const paragraphEl = document.querySelector('body > p');
// console.log('🚀 ~ paragraphEl:', paragraphEl);
const itemEl = document.querySelector('.site-nav-item');
if (!itemEl) {
  console.warn("This element doesn't exist");
}
console.log(itemEl);
const captionEl = document.querySelector('#caption');
console.log(' captionEl:', captionEl);
