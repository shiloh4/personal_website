import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

const handleDownload = () => {
  const fileId = '19deys--ubDNNOLRigvwkXR2eQW2hhh8F';
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  window.open(downloadUrl, '_blank');
};

function Resume() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const resume = 'https://drive.google.com/file/d/19deys--ubDNNOLRigvwkXR2eQW2hhh8F/preview';

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
          
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`mx-auto min-h-[calc(100vh-40px)] ${isMobile ? 'w-mobile' : 'w-desktop'} overflow-y-scroll`}>
      <div className='flex text-2xl text-tech-gold pt-20 px-4 justify-between'>
        <h2>resume</h2>
        <button onClick={handleDownload} className='bg-gray-500/20 hover:bg-gray-500/30 rounded-lg p-2 shadow-xl'>
          <Download />
        </button>
      </div>
      <iframe
        src = {resume}
        className='w-full h-screen my-4 rounded-xl shadow-xl overflow-y-scroll'
      />
    </div>
  );
}

export default Resume;