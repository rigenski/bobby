import Header from './_components/header';
import RunningText from './_components/running-text';
import Section1 from './_components/section-1';
import Section2 from './_components/section-2';

export default async function Page() {
    return (
        <>
            <Header />
            <Section1 />
            <RunningText />
            <Section2 />
        </>
    );
}
