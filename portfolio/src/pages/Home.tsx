import { useState, useEffect } from 'react';

function Home() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`mx-auto min-h-[calc(100vh-40px)] ${isMobile ? 'w-mobile' : 'w-desktop'}`}>
            <div className='flex flex-col mx-auto pt-20 text-white justify-center px-4'>
                <div className="text-tech-gold">
                    <h2 className="text-2xl">ethan loo</h2>
                </div>

                <div>
                    <p className="text-light-primary dark:text-dark-primary">
                        software engineer | computer science @ georgia institute of technology
                    </p>
                </div>
            </div>

            <div className='flex flex-col mx-auto text-light-primary dark:text-dark-primary rounded-xl p-4 bg-gray-500/20 shadow-xl my-8'>
                <p className='pb-2 font-heading'>
                    I am a <i>software engineer</i>, <i>front-end developer</i>, <i>UI/UX designer</i>, <i>problem solver</i>, and <i>lifelong learner</i>.
                </p>
                <p className='py-2'>
                    I love to both build and break things and am driven by challenging projects and self-guided research. My passion lies in creating 
                    intuitive and aesthetic front-end designs that capture the attention of users while enhancing their experience.
                </p>
                <p className='py-2'>
                    I am currently a Computer Science junior at Georgia Tech, with prior experience as a QA engineer with Keysight. My Threads are 
                    <a href="https://www.cc.gatech.edu/academics/threads/information-internetworks" target="_blank" rel="noopener " className='dark:text-link-light text-link-dark hover:underline'> Information Internetworks </a> 
                    and <a href="https://www.cc.gatech.edu/academics/threads/media" target="_blank" rel="noopener" className='dark:text-link-light text-link-dark hover:underline'> Media</a>.
                </p>
                <p className='pt-2'>
                    <i>This is my personal space, where I share my projects and achievements, and showcase my passion for software development and design.</i>
                </p>
            </div>

            <div className='flex flex-col mx-auto text-light-primary dark:text-dark-primary px-4 my-8'>
                <p className='py-2'>
                    <b>Programming/Scripting Languages/Libraries:</b> HTML, CSS, React, Java, Python, GLSL/WebGL, C, C#, JavaScript, SQL, LaTeX, SenseTalk
                </p>
                <p className='py-2'>
                    <b>Software/Frameworks:</b> Android Studio, Unity, Figma, Git, GitHub, MySQL, Firebase, Node.js, MagicaVoxel, Aseprite, Microsoft Suite (Excel, Access, etc.), Eggplant Test Automation
                </p>
                <p className='py-2'>
                    <b>Languages:</b> English, Malay, Mandarin
                </p>
            </div>
        </div>
    );
}

export default Home;