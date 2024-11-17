import { configureStore, Middleware } from '@reduxjs/toolkit';

import counterReducer from './counter/counter-slice';
import pokemonsReducer from './pokemons/pokemons-slice';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { localStorageMiddleware } from './middlewares/local-storage-middleware';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer,
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( localStorageMiddleware as Middleware ),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;