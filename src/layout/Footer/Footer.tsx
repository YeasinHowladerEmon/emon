import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { faFacebook, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faEnvelope, } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    const [scroll, setScroll] = useState<boolean>(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setScroll(true)
            }
            else {
                setScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return (
        <footer className="relative z-10 bg-[#131313] overflow-auto pb-[50px] ">
            <div className="container-x text-center">
                <div className='flex flex-wrap mt-8 mb-10 ml-[32px] justify-center'>
                    <a
                        href="https://github.com/YeasinHowladerEmon"
                        target="_blank" className='border px-3 py-2  border-[#59c378] mr-10 hover:border hover:border-white hover:bg-white lg:mb-0 md:mb-0 mb-4'
                        rel="noreferrer">
                        <FontAwesomeIcon className='text-[#59c378]   transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 ' icon={faGithub} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ariyanemon/"
                        target="_blank" className='border px-3 py-2  border-[#59c378] mr-10 hover:border hover:border-white hover:bg-white lg:mb-0 md:mb-0 mb-4'
                        rel="noreferrer">
                        <FontAwesomeIcon className='text-[#59c378]  transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 ' icon={faLinkedinIn} />
                    </a>
                    <a
                        href="https://twitter.com/Emon_Ibn_Salim"
                        target="_blank" className='border px-3 py-2  border-[#59c378] mr-10 hover:border hover:border-white hover:bg-white lg:mb-0 md:mb-0 mb-4'
                        rel="noreferrer">
                        <FontAwesomeIcon className='text-[#59c378]  transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 ' icon={faTwitter} />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=100092198229264"
                        target="_blank" className='border px-3 py-2  border-[#59c378] mr-10 hover:border hover:border-white hover:bg-white lg:mb-0 md:mb-0 mb-4'
                        rel="noreferrer">
                        <FontAwesomeIcon className='text-[#59c378]  transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 ' icon={faFacebook} />
                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=emonibnsalim@@gmail.com"
                        target="_blank" className='border px-3 py-2  border-[#59c378] mr-10 hover:border hover:border-white hover:bg-white lg:mb-0 md:mb-0 mb-4'
                        rel="noreferrer">
                        <FontAwesomeIcon className='text-[#59c378]  transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 ' icon={faEnvelope} />
                    </a>
                </div>
                <p className="text-white mb-2">
                    Designed and Developed by {" "}
                    <a
                        href="https://github.com/YeasinHowladerEmon"
                        target="_blank"
                        rel="noreferrer" className='text-[#59c378]'>
                        Yeasin Howlader Emon
                    </a>
                </p>
                <p className="text-white">Copyright © {new Date().getFullYear()}, All Rights Reserved</p>
            </div>
            <div className="bottom-[25px] fixed right-[30px] z-[99]">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`${scroll ? "block " : "hidden "} bg-[#59c279b3] border-2 border-[#59c378] rounded-[50%] text-white h-[45px] leading-[45px] text-center w-[45px]  transition-transform duration-900`}>
                    <FontAwesomeIcon icon={faAngleUp} />
                </button>
            </div>
        </footer>
    );
};

export default Footer;