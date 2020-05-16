const ifMatchSerchWithFavorite = (response, itemsFavorite) => {
  return Array.isArray(response)
    ? response.map(item =>
        itemsFavorite.some(favEl => favEl.id === item.id)
          ? { fav: true, ...item }
          : { fav: false, ...item },
      )
    : [response].map(item =>
        itemsFavorite.some(favEl => favEl.id === item.id)
          ? { fav: true, ...item }
          : { fav: false, ...item },
      );
};
export default ifMatchSerchWithFavorite;
