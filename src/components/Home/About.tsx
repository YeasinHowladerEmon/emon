import { faFacebook, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGenderless } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import me from '../../assets/emonAA.jpg';
import shape2 from "../../assets/shape2.5401b75612d2af6041d5.png";
const About = () => {
    return (
        <div className="pb-[120px] pt-[170px] relative bg-[#191919] overflow-hidden z-10">
            <div className="absolute left-0 lg:top-[-70%] md:top-[-70%] top-[-40%] -z-10">
                <svg className="fill-[#FFE500]" width="995" height="1495" viewBox="0 0 995 1495" fill="none"><g opacity="0.3" filter="url(#filter0_f_39_4268)"><circle cx="247.5" cy="747.5" r="247.5" fill="#FFE500"></circle></g><defs><filter id="filter0_f_39_4268" x="-500" y="0" width="1495" height="1495" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4267"></feGaussianBlur></filter></defs></svg>
            </div>
            <div className="absolute right-[0%] bottom-[-95%] -z-10">
                <svg
                    className="fill-[#AD00FF]"
                    width="1252"
                    height="1901"
                    viewBox="0 0 1252 1901"
                    fill="none"
                >
                    <g opacity="0.15" filter="url(#filter0_f_39_4265)">
                        <circle cx="950" cy="950.004" r="450"></circle>
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_39_4265"
                            x="-0.00012207"
                            y="0.00402832"
                            width="1900"
                            height="1900"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            ></feBlend>
                            <feGaussianBlur
                                stdDeviation="250"
                                result="effect1_foregroundBlur_39_4265"
                            ></feGaussianBlur>
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="absolute right-0 bottom-0 -z-0">
                <img src={shape2} alt={shape2} />
            </div>
            <div className="container-x relative z-10">
                <div className="">
                    <div className='grid-rows-1 grid lg:grid-cols-2 md:grid-cols-1 justify-center'>
                        <div className='flex items-center lg:mb-0 md:mb-5'>
                            <img src={me} alt={me} className='w-[80%] h-[100%] lg:m-0 md:m-auto' />
                        </div>
                        <div className='flex items-center lg:mx-0 md:mx-5'>
                            <div>
                                <h1 className='heading-font font-bold text-white lg:text-5xl md:text-[35px] sm:text-[22px] mb-[15px]'>About Me</h1>
                                <p className="base-font text-lg font-normal text-white">
                                    I am a MERN-Stack WEB Developer. I am working with React, Node.js and MongoDB.
                                    I also have experience in developing static websites using HTML5, CSS3 and JavaScript (ES6).
                                    I am a quick learner. I believe in hard work and efficiency. That's why I am always ready to accomplish any task by working hard. I always focus on learning new technology.
                                    My goal is to become Professional Web Developer. And My dream is to become a software engineer
                                </p>
                                <p className="mt-2 mb-4 text-white border-b w-[70%]">Here are a few technologies I've been working with recently :</p>
                                <div className="text-white">
                                    <h5 className='text-[#59c378] mb-1 font-bold'>Frontend</h5>
                                    <ul className="flex flex-wrap pl-0 mb-2">
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> JavaScript (ES6)</li>
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> TypeScript</li>
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> React.js</li>
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> Redux</li>
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> Redux RTK Toolkit</li>
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> React Bootstrap</li>
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> HTML5</li>
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> CSS3</li>
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> Tailwind Css</li>
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> Material UI</li>
                                    </ul>
                                    <h5 className='text-[#59c378] mb-1 font-bold'>Backend</h5>
                                    <ul className="flex flex-wrap pl-0 mb-2">
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> Node.js</li>
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> Express.js</li>
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> MongoDB</li>
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> Mongoose</li>
                                    </ul>
                                    <h5 className='text-[#59c378] mb-1 font-bold'>Tools</h5>
                                    <ul className="flex flex-wrap pl-0 mb-2">
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> VS Code</li>
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> Git</li>
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> Zod</li>
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> Chrome Dev Tool</li>
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> Npm & Yarn</li>
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> Firebase</li>
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> Netlify</li>
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> Heroku</li>
                                        <li className='mr-2'><FontAwesomeIcon className='text-[#59c378]' icon={faGenderless} /> Vercel</li>
                                    </ul>
                                </div>
                                <div className='mt-8 '>
                                    <Link
                                        to="https://github.com/YeasinHowladerEmon"
                                        target="_blank" className='border px-3 py-2  border-[#59c378] mr-6 hover:border hover:border-white hover:bg-white '
                                        rel="noreferrer">
                                        <FontAwesomeIcon className='text-[#59c378]   transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 ' icon={faGithub} />
                                    </Link>
                                    <Link
                                        to="https://www.linkedin.com/in/ariyanemon/"
                                        target="_blank" className='border px-3 py-2 poi  border-[#59c378] mr-6 hover:border hover:border-white hover:bg-white'
                                        rel="noreferrer">
                                        <FontAwesomeIcon className='text-[#59c378]  transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 ' icon={faLinkedinIn} />
                                    </Link>
                                    <Link
                                        to="https://twitter.com/Emon_Ibn_Salim"
                                        target="_blank" className='border px-3 py-2  border-[#59c378] mr-6 hover:border hover:border-white hover:bg-white'
                                        rel="noreferrer">
                                        <FontAwesomeIcon className='text-[#59c378]  transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 ' icon={faTwitter} />
                                    </Link>
                                    <Link
                                        to="https://www.facebook.com/profile.php?id=100092198229264"
                                        target="_blank" className='border px-3 py-2  border-[#59c378] mr-6 hover:border hover:border-white hover:bg-white'
                                        rel="noreferrer">
                                        <FontAwesomeIcon className='text-[#59c378]  transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 ' icon={faFacebook} />
                                    </Link>
                                    <Link
                                        to="https://mail.google.com/mail/?view=cm&fs=1&to=emonibnsalim@@gmail.com"
                                        target="_blank" className='border px-3 py-2  border-[#59c378] mr-6 hover:border hover:border-white hover:bg-white'
                                        rel="noreferrer">
                                        <FontAwesomeIcon className='text-[#59c378]  transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 ' icon={faEnvelope} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;