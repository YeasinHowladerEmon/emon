import { GiHumanCannonball } from "react-icons/gi";


import house from '../../assets/Your-House-Helper.png'
import snake from '../../assets/Snake-Game.png'
import book from '../../assets/ViteTS.png'
import line4 from '../../assets/line3.png'
import line3 from '../../assets/line-4.png'
import { useState } from "react";
import Modal from "./Modal";


export interface IProject {
    id: number;
    title: string;
    img: string;
    description: string;
    tech: string[];
    pUrl: string;
    cUrl: string;
    sUrl: string;
}

const projects: IProject[] = [
    {
        id: 1,
        title: 'Your House Helper',
        img: house,
        description: 'Your-house-helper is a Full-Stack single-page Product sell and house helping and cleaner service provider web app. Home page product show and Service categories, login system, order checkout and admin page',
        tech: ['Javascript', 'Reactjs', 'Sass', 'Firebase Auth', 'Mongo DB', 'nodeJs', 'Express js', 'Heroku'],
        pUrl: 'https://your-house-helper-602ab.web.app/',
        cUrl: 'https://github.com/YeasinHowladerEmon/House-Helper-client',
        sUrl: 'https://github.com/YeasinHowladerEmon/House-helper-server'
    },
    {
        id: 2,
        title: 'Snake Game',
        img: snake,
        description: `It's a simple snake game. and it's a practice project to we see and it's to difficult for me to do that finish and i will try my best . i know it's not perfect . notice: it's a practice project`,
        tech: ['Javascript', 'HTML', 'CSS', 'netlify'],
        pUrl: 'https://incandescent-pavlova-78202e.netlify.app/',
        cUrl: 'https://github.com/YeasinHowladerEmon/Snake-game',
        sUrl: ''
    },
    {
        id: 3,
        title: 'Book Shop',
        img: book,
        description: `This is a Full-Stack single-page Book sell and reading and . Home page book show , login system, anyone can add book and and specific user who can add book and delete  her book and normal user can comment on this book and this is a practice project to new technologist learn to difficult situation i learned new lot of tech and new things`,
        tech: ['Javascript', 'Reactjs', 'Typesctipt', 'Tailwind Css', 'Custom Auth nodejs', 'Mongo DB', 'Mongoose', 'nodeJs', 'Express js', 'vercel', 'zod', 'redux', 'toolkit and RTK Query', 'redux persists'],
        pUrl: 'https://hadith-book-frontend.netlify.app/',
        cUrl: 'https://github.com/YeasinHowladerEmon/book-phero-ass-frontend',
        sUrl: 'https://github.com/YeasinHowladerEmon/book-backend'
    },
]


const Project = () => {
    const [selectedProject, setSelectedProject] = useState<IProject>()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    // const [selectedProject, setSelectedProject] =  useState(null)
    return (
        <div className="project-area relative bg-[#191919] pt-[120px]  overflow-hidden z-10 lg:pb-[160px] pb-[120px]">
            <div className="container-x">
                <div className="lg:flex block grid-cols-2 items-center mb-[40px] xl:mx-0 lg:mx-5">
                    <div className="lg:m-0 lg:text-left text-center md:m-auto  md:mb-[40px] text-white">
                        <h2 className="heading-font font-bold lg:text-5xl md:text-[35px] text-[28px] lg:mb-[1px] md:mb-10 mb-16">Look At My Projects</h2>
                    </div>
                    <div className='w-[130px] h-[130px] lg:mr-0 rounded-full text-center text-[55px] leading-[130px] bg-[#303030] relative before:absolute before:left-[-10px] before:top-[-10px] before:w-[150px] before:decoration-dashed before:z-10 before:h-[150px] before:border before:border-[#383838] before::content before:rounded-full md:mx-auto lg:ml-auto mx-auto  lg:py-0 md:py-2 py-8'>
                        <GiHumanCannonball className='text-[55px] text-[#FFE600] lg:mt-[33px] md:mt-[25px] ml-[40px]' />
                    </div>
                </div>
                <div className="w-full h-auto clear-both grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 justify-items-center  mt-[65px] relative">{projects.map((e) => (
                    <div className='lg:w-[390px] md:w-[390px] w-[320px] lg:mr-[45px] lg:mb-0 md:mb-0 mb-6 md:mx-0 mx-0 group ' key={e.id} onClick={() => { setIsOpen(true), setSelectedProject(e) }}>
                        <div className="">
                            <div className="w-[100%] inline-block">
                                <div className="overflow-hidden">
                                    <img className="w-full h-[300px] transition ease-in-out scale-100  group-hover:scale-110" src={e.img} alt="" />
                                </div>
                            </div>
                            <div className="details w-full float-left mt-[30px]">
                                <span className="category text-white text-[20px] inline-block mb-[13px]">Details</span>
                                <h3 className="title text-[32px] tracking-[-1px] w-[100%] font-medium text-white">
                                    <span className="inline-block relative before:absolute before:w-[100%] before:h-[1px] before:bg-[#81e9a1b3] before:left-[0px] before:bottom-[3px] before:transition-all before:duration-300 before:ease group-hover:before:w-0 ">
                                        {e.title}
                                    </span>
                                </h3>
                            </div>
                        </div>

                    </div>
                ))}
                </div>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} selectedProject={selectedProject!} />
            <div className="absolute top-1/2 left-[30%] transform -translate-x-1/2 -translate-y-1/2 -z-10"><svg className="fill-[#FFE500]" width="1325" height="1687" viewBox="0 0 1325 1687" fill="none"><g filter="url(#filter0_f_39_4166)"><circle cx="481.5" cy="843.5" r="343.5" fillOpacity="0.27"></circle></g><defs><filter id="filter0_f_39_4166" x="-362" y="0" width="1687" height="1687" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4166"></feGaussianBlur></filter></defs></svg></div>
            <div className="absolute bottom-0 left-0 -z-10">
                <img src={line4} alt="" />
            </div>
            <div className="absolute top-0 right-0 -z-10">
                <img src={line3} alt="" />
            </div>
        </div>
    );
};

export default Project;