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
      description: (
        <>
          <p className="mb-4">
            Connect-RX is a comprehensive solution designed to address the problem of medical non-adherence, 
            helping patients track their medication schedules and enabling doctors to monitor adherence more effectively. 
            The system consists of three main components: a React Native mobile app for patients, a web app for doctors 
            and pharmacists, and a Flask API backend, with SQLite as the database.
          </p>
          <p className="mb-4">
            Ngrok was utilized to create a secure connection between the mobile and web applications, 
            facilitating real-time communication during development. Each component was written in a separate repo 
            so the link provided is just for the mobile app I developed. The mobile app allows patients to track 
            their medications throughout the day, while the web app provides doctors with access to patient adherence 
            data, improving treatment monitoring and outcomes.
          </p>
          <p>
            As the <span className="font-semibold">lead frontend developer</span> for the mobile app, my primary focus was building 
            an easy-to-use interface in React Native that helps patients stay on track with their medications. 
            The app features medication cards detailing dosage, frequency, and reminders, a streak counter that 
            tracks daily adherence and motivates patients to maintain consistency, and a comprehensive log of 
            their medication history. These logs are shared with doctors via the web app, providing them with critical 
            insights into patient adherence. I also handled push notifications to remind patients to take their 
            medication on time and ensure adherence data is accurately reflected in the backend.
          </p>
        </>
      ),
      demo: 'https://www.youtube.com/watch?v=OUshT5QRBj4&ab_channel=JunKitLim',
    },
    'Current Crisis': {
      title: 'Current Crisis',
      type: 'Video Game',
      description: (
        <p>Description of project 2</p>
      ),
      demo: 'https://currentcrisis.itch.io/current-crisis',
    },
  }

  return (
    <div className={`mx-auto min-h-[calc(100vh-40px)] ${isMobile ? 'w-mobile' : 'w-desktop'}`}>
      <h2 className="text-2xl mx-auto pt-20 text-tech-gold px-4">portfolio</h2>

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
                  <p className="my-2">{project.description}</p>
                  <p><a href={project.demo} target="_blank" rel="noopener noreferrer" className="dark:text-link-light text-link-dark hover:underline">Demo</a></p>
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