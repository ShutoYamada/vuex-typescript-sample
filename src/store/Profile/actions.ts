import { ActionTree } from 'vuex';
import axios, { AxiosResponse } from 'axios';
import { ProfileState, User } from './types';
import { RootState } from '../types';

/**
 * Action定義
 */
export const actions: ActionTree<ProfileState, RootState> = {
    // プロフィール情報をフェッチ
    fetchProfile({ commit }): any {
        axios({
            // API実行(ここではlocalhost:8080としておく)
            url: 'http://localhost:8080'
        }).then((response: AxiosResponse) => {
            // 取得データ(mock)
            const payload: User = {
                firstName : 'Taro',
                lastName : 'Tanaka',
                email : 'tanaka',
            };
            // コミット
            commit('profileLoaded', payload);
        }, (error) => {
            console.log(error);
            commit('profileError');
        });
    }
};