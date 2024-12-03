'use client';

import { generateUUID } from '@/utils/string';
import { useEffect, useState } from 'react';
import { getModelId } from './actions';
import { Chat } from './chat';
import Image from 'next/image';

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
                            <video src="/assets/chatbot/video.mp4" autoPlay muted loop className="h-full w-full object-cover" />
                        </div>
                        <div className="absolute left-0 top-0 w-full">
                            <Image
                                src="/assets/chatbot/gradient.png"
                                alt="Gradient"
                                width={1920}
                                height={1080}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="absolute left-0 top-0">
                            <div className="px-4 py-8">
                                <div className="flex items-center gap-4">
                                    <Image src="/assets/chatbot/profile.png" alt="Lino" width={480} height={480} className="size-12 rounded-full" />
                                    <h2 className="text-2xl font-bold text-white">Boby v1.0</h2>
                                </div>
                            </div>
                        </div>
                        <div className="absolute left-[50%] top-0 w-full -translate-x-[20%] translate-y-[100%]">
                            <Image src="/assets/chatbot/char.png" alt="Gradient" width={480} height={480} className="h-64 w-64" />
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
