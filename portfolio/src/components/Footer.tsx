import { useState, useEffect } from 'react';

function Footer() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <footer className="flex justify-center w-full py-2 bg-light-default dark:bg-dark-default">
            <div className={`flex justify-between px-4 items-baseline ${isMobile ? 'w-mobile' : 'w-desktop'}`}>
                <p className="text-xs text-light-primary dark:text-dark-primary">
                    © 2024 | Ethan Loo
                </p>
            </div>
        </footer>
    );
}

export default Footer;