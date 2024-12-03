'use client';

import { generateUUID } from '@/utils/string';
import { useEffect, useState } from 'react';
import { getModelId } from './actions';
import { Chat } from './chat';

export default function ChatbotContainer() {
    const id = generateUUID();

    const [selectedModelId, setSelectedModelId] = useState<string | null>(null);

    useEffect(() => {
        const fetchModelId = async () => {
            const modelId = await getModelId();
            setSelectedModelId(modelId);
        };
        fetchModelId();
    }, []);

    if (!selectedModelId) {
        return <></>;
    }

    return (
        <section className="h-full max-h-screen w-full overflow-hidden">
            <div className="flex h-full w-full">
                <div className="w-1/2">
                    <div className="relative">
                        <div className="size-full">
                            <video src="/assets/chatbot/video.mp4" autoPlay muted loop className="w-full" />
                        </div>
                        <div className="absolute left-0 top-0">
                            <div className="px-4 py-8">
                                <h2 className="mb-4 text-4xl font-bold text-white">Lino v.1</h2>
                                <p className="text-lg font-normal text-white">
                                    Lino’s gentle eyes and smile are <br /> designed to build an emotional
                                    <br /> bond.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <Chat key={id} id={id} initialMessages={[]} selectedModelId={selectedModelId} />
                </div>
            </div>
        </section>
    );
}
