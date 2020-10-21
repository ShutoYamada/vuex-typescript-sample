import { GetterTree } from 'vuex';
import { ProfileState } from './types';
import { RootState } from '../types';

/**
 * Getter定義
 */
export const getters: GetterTree<ProfileState, RootState> = {
    /**
     * フルネーム取得
     * @param state 
     */
    fullName(state): string {
        const { user } = state;
        const firstName = (user && user.firstName) || '';
        const lastName = (user && user.lastName) || '';
        return `${firstName} ${lastName}`;
    }
};