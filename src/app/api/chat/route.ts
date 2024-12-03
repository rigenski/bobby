import type { Message } from 'ai';
import { convertToCoreMessages, StreamData, streamText } from 'ai';

import { customModel } from '@/ai';
import { models } from '@/ai/models';
import { regularPrompt } from '@/ai/prompts';

export const maxDuration = 60;

export async function POST(request: Request) {
    const { messages, modelId }: { messages: Message[]; modelId: string } = await request.json();

    const model = models.find((model) => model.id === modelId);

    if (!model) {
        return new Response('Model not found', { status: 404 });
    }

    const coreMessages = convertToCoreMessages(messages);
    const streamingData = new StreamData();

    const result = await streamText({
        model: customModel('gpt-4o-mini'),
        system: regularPrompt,
        messages: coreMessages,
        maxSteps: 5,

        onFinish: async () => {
            streamingData.close();
        },
        experimental_telemetry: {
            isEnabled: true,
            functionId: 'stream-text',
        },
    });

    return result.toDataStreamResponse({
        data: streamingData,
    });
}
