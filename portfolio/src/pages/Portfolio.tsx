import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Portfolio() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [openProjects, setOpenProjects] = useState<Record<number, boolean>>({});
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
          
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleProject = (index: number) => {
    setOpenProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const projects = {
    'ConnectRX': {
      title: 'HackGT11: ConnectRX',
      type: 'Mobile App + Web App',
      description: 'Description of project 1',
      repo: 'https://example.com/project1',
      demo: 'https://example.com/demo1',
    },
    'Current Crisis': {
      title: 'Current Crisis',
      type: 'Video Game',
      description: 'Description of project 2',
      repo: 'https://example.com/project2',
      demo: 'https://example.com/demo2',
    },
  }

  return (
    <div className={`mx-auto py-8 ${isMobile ? 'w-mobile' : 'w-desktop'}`}>
      <div className='mx-auto mt-12 text-tech-gold my-8 px-4'>
        <h2 className="text-2xl">portfolio</h2>
      </div>      
      {Object.values(projects).map((project, index) => (        
        <div>
          <motion.div 
            key={index} 
            className='flex flex-col py-2 px-4 bg-gray-300 shadow-xl rounded-xl my-4'
            layout
            transition={{layout: {duration: 0.3, ease: "easeInOut"}}}
          >
            <button onClick={() => toggleProject(index)} className="w-full text-left">
            <div className={`${openProjects[index] ? 'py-2' : ''} transition duration-300 flex flex-row justify-between`}>
              <h2 className='font-bold'>{project.title}</h2>
              <ChevronDown className={`${openProjects[index] ? 'rotate-180' : ''} transition duration-300 text-tech-gold`}/>
            </div>
            </button>        
          </motion.div>

          <AnimatePresence>
            {openProjects[index] && (            
              <motion.div 
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden px-4 my-2 text-black dark:text-white"
              >
                <div>
                  <p className="font-semibold">{project.type}</p>
                  <p className="mt-2">{project.description}</p>
                  <div className="flex gap-4 mt-3 pb-2">
                    <p><a href={project.repo} target="_blank" rel="noopener noreferrer" className="dark:text-link-light text-link-dark hover:underline">Repository</a></p>
                    <p><a href={project.demo} target="_blank" rel="noopener noreferrer" className="dark:text-link-light text-link-dark hover:underline">Demo</a></p>
                  </div>
                </div>            
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;