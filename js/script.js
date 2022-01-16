'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const promoAdv = document.querySelectorAll('.promo__adv img'),
        promoBg = document.querySelector('.promo__bg'),
        promoGenre = promoBg.querySelector('.promo__genre'),
        promoInt = document.querySelector('.promo__interactive'),
        movieList = document.querySelector('.promo__interactive-list'),
        promoIntItem = promoInt.querySelector(".promo__interactive-item"),
        formAdd = document.querySelector('form.add'),
        inputFilm = formAdd.querySelector('.adding__input'),
        checkBox = formAdd.querySelector('[type="checkbox"]')




    const sortArr = (arr) => {
        arr.sort()
    }

    const deleteAdv = (adv) => {
        adv.forEach(i => {
            i.remove()
        })
    }

    const makeChanges = () => {
        promoGenre.textContent = "Драма"

        promoBg.style.background = 'url("../img/bg.jpg")'
    }

    const createMovieList = (films, parent) => {
        parent.innerHTML = ""
        sortArr(films)
        films.forEach((film, number) => {
                parent.innerHTML += `<li class="promo__interactive-item">№${number + 1} - ${film}
                            <div class="delete"></div>
                        </li>`
            }
        )
        document.querySelectorAll('.delete').forEach((btn, n)=>{
            btn.addEventListener('click',()=>{
                btn.parentElement.remove()
                movieDB.movies.splice(n,1)
                createMovieList(films, parent)

            })
        })
    }

    formAdd.addEventListener('submit', (e) => {
        e.preventDefault()

        let newFilmName = inputFilm.value
        const favoriteFilm = checkBox.checked

        if (newFilmName) {
            if(newFilmName.length >21){
    newFilmName = `${newFilmName.substring(0,22)}...`
            }

            if(favoriteFilm === true){
                console.log("Добавляем любимый Фильм")
            }
            movieDB.movies.push(newFilmName)
            sortArr(movieDB.movies)
            createMovieList(movieDB.movies, movieList)
        }
        formAdd.reset()

    })


    createMovieList(movieDB.movies, movieList)
    deleteAdv(promoAdv)
    makeChanges()
})
