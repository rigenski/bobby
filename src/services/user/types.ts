import type { TPaginationParams, TSuccessResponse, TSuccessResponseWithPagination } from '@/types/http';
import { z } from 'zod';

const schemaResponse = z.object({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export type TUserRequest = TPaginationParams;

export type TUserResponse = TSuccessResponseWithPagination<Array<z.infer<typeof schemaResponse>>>;

const schemaDetailRequest = z.object({
    id: z.string(),
});

export type TUserDetailRequest = z.infer<typeof schemaDetailRequest>;

export type TUserDetailResponse = TSuccessResponse<z.infer<typeof schemaResponse>>;
