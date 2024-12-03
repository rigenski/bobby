'use server';

import { cookies } from 'next/headers';
import { DEFAULT_MODEL_NAME, models } from '@/ai/models';

export async function getModelId() {
    const cookieStore = await cookies();
    const modelIdFromCookie = cookieStore.get('model-id')?.value;

    return models.find((model) => model.id === modelIdFromCookie)?.id || DEFAULT_MODEL_NAME;
}
