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
        <div className={`mx-auto py-8 ${isMobile ? 'w-mobile' : 'w-desktop'}`}>
            <div className='flex flex-col mx-auto mt-12 text-white justify-center'>
                <div className="text-tech-gold">
                    <h2 className="text-xl font-medium">ethan loo</h2>
                </div>

                <div>
                    <p className="text-light-primary dark:text-dark-primary">
                        software engineer | computer science @ georgia institute of technology
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;