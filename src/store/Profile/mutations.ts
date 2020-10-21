import { MutationTree } from 'vuex';
import { ProfileState, User } from './types';

/**
 * Mutations定義
 */
export const mutations: MutationTree<ProfileState> = {
    /**
     * プロフィール読み込み成功
     * @param state 
     * @param payload 
     */
    profileLoaded(state, payload: User) {
        state.error = false;
        state.user = payload;
    },
    /**
     * 読み込み失敗
     * @param state 
     */
    profileError(state) {
        state.error = true;
        state.user = undefined;
    }
};