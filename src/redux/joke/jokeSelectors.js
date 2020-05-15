// import { createSelector } from "reselect";

const getJoke = store => store.jokes.dataJokes;

// use if you need add fav not in store
// const getJokeWithIsFav = createSelector(
//     [getJoke],
//    addFav=> addFav.map(item => Object.assign({ fav: false }, item))
// )

export default getJoke;
