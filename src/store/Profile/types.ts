/**
 * ユーザ情報型定義
 */
export type User = {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
}

/**
 * プロフィールState型定義
 */
export type ProfileState = {
    user?: User;
    error: boolean;
}