import { useEffect, useState } from 'react';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

function Contact() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
              
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`flex flex-col justify-center flex-grow mx-auto px-4 ${isMobile ? 'w-[80%]' : 'w-[55%]'} min-h-[calc(100vh-40px)]`}>
            <div className="grid gap-4">
                <div className="col-span-8">
                    <div className="flex items-center">
                        <Linkedin className="text-tech-gold w-5 h-5 mr-3" />
                        <p className="my-2">
                            <a href="https://www.linkedin.com/in/ethan-loo-73a1b0236/" 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               className="hover:underline text-black dark:text-white">
                                linkedin.com/in/ethan-loo-73a1b0236/
                            </a>
                        </p>
                    </div>
                </div>
                <div className="col-span-8">
                    <div className="flex items-center">
                        <Github className="text-tech-gold w-5 h-5 mr-3" />
                        <p className="my-2">
                            <a href="https://github.com/shiloh4" 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               className="hover:underline text-black dark:text-white">
                                github.com/shiloh4
                            </a>
                        </p>
                    </div>
                </div>
                <div className="col-span-8">
                    <div className="flex items-center">
                        <Mail className="text-tech-gold w-5 h-5 mr-3" />
                        <p className="my-2">
                            <a href="mailto:ethanlooyt@gmail.com" 
                               className="hover:underline text-black dark:text-white">
                                ethanlooyt@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
                <div className="col-span-8">
                    <div className="flex items-center">
                        <Phone className="text-tech-gold w-5 h-5 mr-3" />
                        <p className="my-2 text-black dark:text-white">
                            (470) 301-5218
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;