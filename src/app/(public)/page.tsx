import Footer from './_components/footer';
import Header from './_components/header';
import RunningText from './_components/running-text';
import RunningText2 from './_components/running-text2';
import Section1 from './_components/section-1';
import Section2 from './_components/section-2';
import Section3 from './_components/section-3';
import Section4 from './_components/section-4';
import Socmed from './_components/socmed';

export default async function Page() {
    return (
        <>
            <Header />
            <Section1 />
            <RunningText />
            <Section2 />
            <Socmed />
            <Section3 />
            <RunningText2 />
            <Section4 />
            <Footer />
        </>
    );
}
