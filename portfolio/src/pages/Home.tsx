function Home() {
    const isMobile = window.innerWidth < 768;

    return (
        <div className='w-full'>
            <div className={`relative flex flex-col mx-auto mt-12 bg-primary text-white justify-center ${
                    isMobile ? "mobile" : "desktop"
                }`}
            >
                    <div className=" text-tech-gold px-3">
                        <h2 className="text-tech-gold text-xl font-medium">ethan loo</h2>
                    </div>

                    <div className="px-3">
                        <p className="text-light-primary dark:text-dark-primary">
                            software engineer | computer science @ georgia institute of technology
                        </p>
                    </div>
            </div>
        </div>
    );
}

export default Home;