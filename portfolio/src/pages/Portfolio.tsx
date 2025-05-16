import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

function Portfolio() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
          
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

      {/* <div className='flex flex-col mx-auto text-light-primary dark:text-dark-primary rounded-xl p-4 bg-gray-500/20 shadow-xl my-8'> */}
      {Object.values(projects).map((project, index) => (
        <div key={index} className='py-2 px-4 bg-gray-300 shadow-xl rounded-xl my-4 justify-between'>
          <p>{project.title}</p>
          <ChevronDown className='text-tech-gold' />
        </div>
      ))}
      {/* </div> */}
    </div>
  );
}

export default Portfolio;