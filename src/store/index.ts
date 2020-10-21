import Vue from 'vue'
import Vuex from 'vuex'
import { RootState } from './types';
import { profile } from './Profile/index';

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  state: {
    version : '1.0.0',
  },
  modules: {
    profile
  }
})
