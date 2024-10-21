import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getObjAsyncStorage, setObjAsyncStorage } from '../shared/utils/async-storage.util';
import { WritableDraft } from 'immer';

export interface Joke {
  id: number;
  joke: string;
  added_date: string;
  liked: boolean,
}

interface JokesState {
  history: Joke[];
  todayJoke: Joke;
  loading: boolean;
  error: string | null;
}

const initialState: JokesState = {
  history: [],
  todayJoke: {
    id: 0,
    joke: '',
    added_date: new Date().toISOString(),
    liked: false,
  },
  loading: false,
  error: null,
};


export const fetchJoke = createAsyncThunk<Joke>('jokes/fetchJoke', async () => {
  const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
  const json = await response.json();
  const newJoke = {
    id: json.id,
    joke: json.joke,
    added_date: new Date().toISOString(),
    liked: false,
  };

  await setObjAsyncStorage('todayJoke', newJoke);

  const storedJokes = await getObjAsyncStorage('allJokes');
  const allJokes = storedJokes ? storedJokes : [];

  allJokes.push(newJoke);
  await setObjAsyncStorage('allJokes', allJokes);

  return newJoke;
});

const toggleTodayJokeLike = async () => {
  const todayJoke = await getObjAsyncStorage('todayJoke');
  const todayJokeData = todayJoke ? todayJoke : null;

    await setObjAsyncStorage('todayJoke', {...todayJokeData, liked: !todayJokeData?.liked });
};

const saveInStorage = async (state: WritableDraft<JokesState>) => {
   await setObjAsyncStorage('allJokes', state.history);
};

const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {
    loadTodayJoke: (state, action) => {
      state.todayJoke = action.payload;
    },
    loadHistory: (state, action) => {
      state.history = action.payload;
    },
    toggleLike: (state, action) => {
      const jokeToToggle = action.payload;
      const indexInHistory = state.history.findIndex(joke => joke.id === jokeToToggle.id);

      if (indexInHistory !== -1) {
        state.history[indexInHistory].liked = !state.history[indexInHistory].liked;
      }

      if (state.todayJoke.id === jokeToToggle.id) {
        state.todayJoke.liked = !state.todayJoke.liked;
        toggleTodayJokeLike();
      }

      saveInStorage(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJoke.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJoke.fulfilled, (state, action) => {
        state.loading = false;
        state.todayJoke = action.payload;
        state.history.unshift(action.payload);
      })
      .addCase(fetchJoke.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch joke';
      });
  },
});

export const { loadTodayJoke, loadHistory, toggleLike } = jokesSlice.actions;
export default jokesSlice.reducer;
