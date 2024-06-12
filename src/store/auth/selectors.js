export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectUserPets = (state) => state.auth.user.pets;

export const selectFavoritesNotices = (state) =>
  state.auth.user.noticesFavorites;
