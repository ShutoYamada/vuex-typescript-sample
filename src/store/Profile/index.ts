import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ProfileState } from './types';
import { RootState } from '../types';

/**
 * プロフィールState
 */
export const state: ProfileState = {
    user: undefined,
    error: false
};

const namespaced = true;

/**
 * Moduleとして出力
 */
export const profile: Module<ProfileState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};