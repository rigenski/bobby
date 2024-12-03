import Image from 'next/image';
import Arrow from './_assets/arraow.svg';
import Copy from './_assets/copy.svg';
import Every from './_assets/Every-greate.svg';
import LogoFoot from './_assets/logo-foot.svg';
import XBig from './_assets/wizard-x-big.svg';
import Xwiz from './_assets/xwizard.svg';
import Xzom from './_assets/xzombie.svg';
import Link from 'next/link';
import Footer from '../(public)/_components/footer';

export default function Page() {
    return (
        <>
            <div className="">
                <div className="flex flex-col items-center pt-[66px]">
                    <div className="w-[700px] pl-[70px] mb-[70px]">
                        <Link href="/" className="flex items-center gap-[10px]">
                            <Image src={Arrow} alt="" />
                            <span className={`mulish-regular`}>Back to Home</span>
                        </Link>
                    </div>

                    <div>
                        <h1
                            className={`text-[56px] balsamiq-sans-bold text-white font-bold [text-shadow:2px_2px_0px_#2D384D]`}
                            style={{
                                WebkitTextStroke: '1px #2D384D',
                            }}
                        >
                            Proof of Concept
                        </h1>
                    </div>
                    <div className="w-[700px] mt-[58px]">
                        <h1
                            className={`text-[32px] balsamiq-sans-bold text-white font-bold [text-shadow:2px_2px_0px_#2D384D]`}
                            style={{
                                WebkitTextStroke: '1px #2D384D',
                            }}
                        >
                            Boby - The Restful Realm Guide
                        </h1>

                        <p
                            className={` text-[16px] text-[#000000BA] mulish-bold `}
                        >
                            Last update: 12/03/2024
                        </p>

                        <div className={`h-[1px] w-[700px] bg-[#0000003D] mt-[40px]`}></div>

                        <div className={`mt-[30px]`}>
                            <h1
                                className={`text-[36px] text-[#000000BA] mulish-bold mb-[20px]`}
                            >
                                Core Concept
                            </h1>
                            <p
                                className={`text-[20px] text-[#000000BA] mulish-medium leading-[30px]`}
                            >
                                Boby is an AI experience designed to simplify the complexities of
                                <br /> modern life with wisdom, humor, and charm. Born from the Restful
                                <br /> Realm, Boby offers users a calming escape from the digital chaos,
                                <br /> transforming overwhelming thoughts into manageable insights.
                                <br /> Boby encourages reflection, relaxation, and growth through
                                <br /> interactive, easy-to-understand dialogues.
                            </p>
                        </div>
                        <div className={`mt-[30px]`}>
                            <h1
                                className={`text-[36px] text-[#000000BA] font-bold mb-[20px]`}
                            >
                                Technical Implementation
                            </h1>
                            <div className="bg-[#2D384D] pt-[2px] px-[3px] rounded-[12px] pb-[8px]">
                                <div className="pt-[27px] px-[51px] pb-[25px] rounded-[9px] bg-[#E0DCC1] flex justify-between items-center gap-[125px]">
                                    {' '}
                                    <ol className={`list-decimal list-outside mulish-regular`}>
                                        <li>
                                            Machine Learning (ML) for Simplicity and Growth
                                            <ul className="list-disc list-outside pl-[20px]">
                                                <li>Simplified Guidance: Boby uses ML algorithms to break down complex ideas into digestible explanations tailored to the user's cognitive and emotional state.</li>
                                                <li>Sentiment Analysis: Detects user emotions in real time, adapting tone and language to provide comforting responses.</li>
                                                <li>Dynamic Interaction: Leverages generative AI to create personalized conversations that evolve based on user behavior and preferences.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Adaptive Learning
                                            <ul className="list-disc list-outside pl-[20px]">
                                                <li>Real-Time Feedback: Continuously learns from user interactions to refine its simplicity-first approach.</li>
                                                <li>Knowledge Growth: Expands its advice and insights library with every interaction, ensuring users always receive fresh, relevant guidance.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Cloud Integration
                                            <ul className="list-disc list-outside pl-[20px]">
                                                <li>Always Accessible: Hosted on scalable cloud infrastructure, Boby is available to users across platforms and devices.</li>
                                                <li>Seamless Updates: Regularly incorporates new features, ensuring continuous improvement and innovation.</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>{' '}
                        </div>
                        <div className={`mt-[30px]`}>
                            <h1 className={`text-[36px] text-[#000000BA] font-bold mb-[20px]`}>Features</h1>
                            <ol className={`pl-[20px] list-decimal list-outside mulish-regular`}>
                                <li>
                                    Guided Reflection
                                    <ul className="list-disc list-outside pl-[20px]">
                                        <li>Encourages users to slow down and process their thoughts with simple analogies and relatable examples.</li>
                                        <li>Example:
                                            <ul className="list-disc list-outside pl-[20px]">
                                                <li>User: “I feel overwhelmed with work.”</li>
                                                <li>Boby: “Think of it like juggling. Maybe you just need to set one ball down for a moment. What’s the easiest one to start with?”</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Interactive Storytelling
                                    <ul className="list-disc list-outside pl-[20px]">
                                        <li>Users can engage with Boby in collaborative story creation, blending wisdom with creativity.</li>
                                        <li>Example:
                                            <ul className="list-disc list-outside pl-[20px]">
                                                <li>User: “Tell me a story about rest.”</li>
                                                <li>Boby: “Once, in the Restful Realm, there was a tree that grew stronger the more it paused to soak in the sunlight. Maybe you need your sunlight too.”</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Personal Growth Tools
                                    <ul className="list-disc list-outside pl-[20px]">
                                        <li>Offers exercises for mindfulness, time management, or personal reflection.</li>
                                        <li>Example:
                                            <ul className="list-disc list-outside pl-[20px]">
                                                <li>User: “I don’t know what to do next in life.”</li>
                                                <li>Boby: “Close your eyes. Imagine your day 10 years from now. What’s one thing you’d like to have done by then?”</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Playful Engagement
                                    <ul className="list-disc list-outside pl-[20px]">
                                        <li>Lighthearted interactions to bring humor and charm into users’ routines.</li>
                                        <li>Example:
                                            <ul className="list-disc list-outside pl-[20px]">
                                                <li>Boby: “Remember, even snails reach their destination. And they don’t need Google Maps!”</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                        <div className={`mt-[30px]`}>
                            <h1
                                className={`text-[36px] text-[#000000BA] font-bold mb-[20px]`}
                            >
                                User Flow
                            </h1>
                            <ol className="pl-[20px] list-decimal list-outside mulish-regular">
                                <li>
                                    Welcome Experience
                                    <ul className="list-disc list-outside pl-[20px]">
                                        <li>Introduces Boby with a warm and quirky message: “Hey there! I’m Boby, your Restful Realm guide. Need a dose of calm or just someone to simplify things for you? Let’s get started!”</li>
                                    </ul>
                                </li>
                                <li>
                                    Interactive Conversations
                                    <ul className="list-disc list-outside pl-[20px]">
                                        <li>Users initiate dialogue, and Boby dynamically responds, adapting to their needs:
                                            <ul className="list-disc list-outside pl-[20px]">
                                                <li>User: “Explain blockchain to me.”</li>
                                                <li>Boby: “Think of it as a digital ledger where everyone keeps the same notes. No erasers allowed!”</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Branching Outcomes
                                    <ul className="list-disc list-outside pl-[20px]">
                                        <li>Boby crafts personalized responses that align with user preferences, leading to reflective insights or lighthearted banter:
                                            <ul className="list-disc list-outside pl-[20px]">
                                                <li>Accept guidance: Boby provides actionable steps.</li>
                                                <li>Opt for humor: Boby shares a playful anecdote.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Call to Action
                                    <ul className="list-disc list-outside pl-[20px]">
                                        <li>Encourages users to deepen their engagement: “Feeling calmer? Let’s explore more ways to keep things simple.”</li>
                                    </ul>
                                </li>
                            </ol>
                            <p
                                className={`mt-[20px] mulish-regular`}
                            >
                                Use Case Example For Boby
                            </p>
                            <p
                                className={`mt-[20px] mulish-regular`}
                            >
                                Personal Growth and Reflection <br />
                                Scenario:
                            </p>
                            <p className={`mulish-regular`}>
                                A busy professional feels overwhelmed by their workload and seeks a moment of clarity.
                            </p>
                            <div className="mt-[40px] bg-[#2D384D] pt-[2px] px-[3px] rounded-[12px] pb-[8px]">
                                <div className="pt-[26px] px-[27px] pb-[25px] rounded-[9px] bg-[#E0DCC1] justify-between items-center gap-[125px]">
                                    {' '}
                                    <div>
                                        <p
                                            className={`text-[#000000B8] mulish-regular  opacity-35`}
                                        >
                                            User
                                        </p>
                                        <p
                                            className={` list-outside mulish-regular`}
                                        >
                                            “I’m stressed and don’t know how to handle everything at work.”
                                        </p>
                                    </div>
                                    <div className="mt-[50px]">
                                        <p
                                            className={`text-[#000000B8] mulish-regular  opacity-35`}
                                        >
                                            Boby
                                        </p>
                                        <p
                                            className={` list-outside mulish-regular`}
                                        >
                                            “Let’s take a step back. Imagine your tasks as building blocks. What’s the foundation block you need to start with? Let’s focus there."
                                        </p>
                                    </div>
                                </div>
                            </div>{' '}
                            <div className="mt-[70px]">
                                <h1 className="text-[#000000B8] mulish-regular">Extended Use Cases</h1>
                                <h1 className="text-[#000000B8] mulish-regular">For Individuals</h1>
                                <ul className="list-disc list-outside pl-[20px]">
                                    <li className="text-[#000000B8] mulish-regular">Mental Clarity: Navigate stress and confusion with Boby's calming wisdom.</li>
                                    <li className="text-[#000000B8] mulish-regular">Personal Growth: Reflect on goals and aspirations through playful yet profound dialogue.</li>
                                </ul>
                                <h1 className="text-[#000000B8] mulish-regular">For Businesses</h1>
                                <ul className="list-disc list-outside pl-[20px]">
                                    <li className="text-[#000000B8] mulish-regular">Customer Support: Simplify complex product or service explanations with Boby's unique tone.</li>
                                    <li className="text-[#000000B8] mulish-regular">Brand Engagement: Enhance user experience with a relatable and interactive AI guide.</li>
                                </ul>
                                <h1 className="text-[#000000B8] mulish-regular">For Education</h1>
                                <ul className="list-disc list-outside pl-[20px]">
                                    <li className="text-[#000000B8] mulish-regular">Simplified Learning: Break down challenging concepts into relatable explanations.</li>
                                    <li className="text-[#000000B8] mulish-regular">Interactive Teaching: Promote exploration of new topics through conversational learning.</li>
                                </ul>
                                <h1 className="text-[#000000B8] mulish-regular">Design and Branding</h1>
                                <ul className="list-disc list-outside pl-[20px]">
                                    <li className="text-[#000000B8] mulish-regular">Visual Identity: Boby's appearance evokes charm and simplicity, with warm yellow tones and a calming blue cap symbolizing friendliness and trust.</li>
                                    <li className="text-[#000000B8] mulish-regular">Tone: Relaxed, quirky, and empathetic, balancing humor with wisdom.</li>
                                    <li className="text-[#000000B8] mulish-regular">CTAs: Seamlessly integrated prompts, such as “Simplify Your Thoughts,” “Ask Boby Anything,” or “Take a Breather.”</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`mt-[30px]`}>
                            <h1
                                className={`text-[36px] text-[#000000BA] font-bold mb-[20px]`}
                            >
                                Scalability
                            </h1>
                            <ol className="pl-[20px] list-decimal list-outside mulish-regular">
                                <li>
                                    Phases of Development
                                    <div className="pl-[3px]">
                                        <p className="flex gap-[5px]">
                                            <span>a. </span>
                                            <span>Phase 1: Launch conversational AI focusing on simplicity and guidance.</span>
                                        </p>
                                        <p className="flex gap-[5px]">
                                            <span>b. </span>
                                            <span>Phase 2: Introduce gamified storytelling for creative users.</span>
                                        </p>
                                        <p className="flex gap-[5px]">
                                            <span>c. </span>
                                            <span>Phase 3: Expand into AR/VR integrations for immersive calming experiences.</span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    Potential Markets
                                    <ul className="list-disc list-outside pl-[20px]">
                                        <li>Wellness and Mental Health: Offer Boby as a personal guide for stress management.</li>
                                        <li>Education: Position Boby as a digital tutor for simplifying complex subjects.</li>
                                        <li>Entertainment: Use Boby’s storytelling capabilities for casual, interactive experiences.</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                        <div className={`mt-[30px]`}>
                            <h1
                                className={`text-[36px] text-[#000000BA] font-bold mb-[20px]`}
                            >
                                Conclusion
                            </h1>
                            <p
                                className={`text-[20px] text-[#000000BA] mulish-regular`}
                            >
                                Boby is more than an AI chatbot—it’s a companion for navigating life’s complexities with ease. With its charm, wit, and calming wisdom, Boby transforms overwhelming moments into opportunities for reflection and growth. Boby is here to remind us all that sometimes, taking it slow is the fastest way forward.
                            </p>
                            <p
                                className={`text-[20px] text-[#000000BA] mulish-regular mt-5`}
                            >
                                Explore the Restful Realm. Boby is waiting.
                            </p>
                        </div>
                    </div>
                    <div className="pt-[30px] pb-[184px] flex flex-col gap-[24px]"></div>
                </div>
            </div>
            <Footer />
        </>
    );
}
