import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const persistedState = createPersistedState({
  key: 'meta-parts-user',
  storage: window.localStorage,
});

export const store = createStore({
  state () {
    return {
        user: null,
        loggedIn: 0,
    }
  },

  mutations: {
    login(state, user) {
        state.loggedIn = 1;
        state.user = user;
    },
    logout(state) {
        state.loggedIn = 0;
        state.user = null;
    }
  },

  getters: {
    loggedIn: (state) => state?.loggedIn,
    getUsername: (state) => state?.user?.name
  },

  plugins: [persistedState]
})