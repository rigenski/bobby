import { http } from '@/utils/http.client';

import type { TUserDetailRequest, TUserDetailResponse, TUserRequest, TUserResponse } from './types';

export async function getUser(params: TUserRequest) {
    return await http<TUserResponse>('GET', '/user', {
        query: {
            ...params,
        },
        cache: 'default',
    });
}

export async function getUserDetail(params: TUserDetailRequest) {
    return await http<TUserDetailResponse>('GET', `/user/${params.id}`, {
        cache: 'default',
    });
}
