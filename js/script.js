/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// - 1 -
const promoAdv = document.querySelectorAll('.promo__adv img'),
    promoBg = document.querySelector('.promo__bg'),
    promoGenre = promoBg.querySelector('.promo__genre'),
    promoInt = document.querySelector('.promo__interactive'),
    promoIntItem = document.querySelector('.promo__interactive-list')
/*promoIntItem = promoInt.getElementsByClassName("promo__interactive-item")*/


promoAdv.forEach(i => {
    i.remove()
})

promoGenre.textContent = "Драма"

promoBg.style.background = 'url("../img/bg.jpg")'


console.log(promoIntItem)
promoIntItem.innerHTML = ""
movieDB.movies.forEach((film, number) => {
        promoIntItem.innerHTML += `<li class="promo__interactive-item">№${number+1} - ${film}
                            <div class="delete"></div>
                        </li>`
    }
)

/* Мое решение 4 и 5
movieDB.movies.sort()
for (let n = 0; n < movieDB.movies.length; n++) {
    promoIntItem[n].innerText = `№${n + 1}. ${movieDB.movies[n]}`
}
*/



