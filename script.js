const mark = `Оценка - 150 баллов 
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1) есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке (например, в документе Google Docs). 

Выполненные пункты:
1) вёрстка валидная. Проверить валидность вёрстки: https://validator.w3.org/ 

2) вёрстка семантическая. В коде страницы присутствуют семантические теги HTML5, например, article, aside, figure, figcaption, footer, header, main, nav, section, используются заголовки h1-h6. 2 балла за каждый уникальный семантический тег HTML5 и за каждый уникальный заголовок h1-h6, но не больше 20 баллов. Заголовок h1 может быть только один 

3) для оформления СV используются css-стили. 1 балл за каждый стилизованный элемент, но не больше 10 баллов 

4) контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы 

5) вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется 

6) есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. 

7) на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) 

8) контакты для связи и перечень навыков оформлены в виде списка ul > li 

9) CV содержит контакты, краткую информацию о себе, навыки, образование, уровень английского 

10) CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода 

11) CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий 

12) CV выполнено на английском языке 

13) выполнены требования к репозиторию: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, указана дата дедлайна, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) 

14) дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию 


`
function burger() {
  let element = document.getElementById("menu");
  let menu = document.getElementById("menu-burger");
  element.classList.toggle("open");
  element.classList.toggle("menu");

  menu.classList.toggle("menu-burger-close");
}
console.log(mark);