import emon from '../../assets/emonAA.jpg'
import js from '../../assets/JavaScript.svg.png'
import ts from '../../assets/Typescript.svg.png'
import rjs from '../../assets/React-icon.svg.png'
import Typewriter from 'typewriter-effect';
import tall from '../../assets/tailwind.svg'
import line1 from '../../assets/line-1.d03426237aa137b47141.png'
import line2 from '../../assets/line-2.326f98abce9f428d7f46.png'
const Hero = () => {
    return (
        <section id='home' className="static-hero bg-[#131313]  xl:h-[900px] lg:h-[850px] md:h-[1000px] h-[890px]  relative z-10 overflow-hidden">
            <div className="flex items-start justify-center md:justify-start lg:pt-[250px] md:pt-[200px] md:pb-[100px] pt-[200px] pb-[100px] flex-col w-full h-full bg-cover bg-center text-left z-50">
                <div className=" container-x">
                    <div className="grid lg:grid-cols-3 grid-cols-1 xl:mx-2 lg:mx-10 ">
                        <div className="xl:w-[660px] lg:w-[470px] lg:text-left  md:w-full md:text-center lg:col-start-1 text-center">
                            <h2 className="text-white xl:text-[80px]  font-bold xl:leading-[80px] xl:mb-[10px] lg:text-[65px] lg:mb-[10px] lg:leading-[75px] md:text-[45px] md:leading-[45px] text-[35px] leading-[35px] mb-[0px]">
                                <span className="block  text-[#FFE600] lg:text-[55px] md:text-[35px] text-[35px]  mb-[0px]">Hello,</span>
                                I am Emon.
                            </h2>
                            <h5 className="text-[#59C378]  font-semibold leading-[39px] lg:mb-[20px]  lg:text-[28px] md:text-[22px] md:mb-[10px] text-[20px] mb-[5px]"><Typewriter
                                options={{
                                    strings: [
                                        "Jr. JavaScript Developer",
                                        "MERN-Stack Developer",
                                        "Jr. Front End Developer",
                                        "Jr. React Developer",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></h5>
                            <p className="text-white xl:text-[19px] lg:text-[16px] md:text-[19px]   font-normal lg:leading-[33px] mb-[30px] text-[15px] leading-[28px] lg:mx-0  md:mx-[80px] mx-0 font-mono">
                                As a self-motivated and enthusiastic web developer, I am dedicated to leveraging my potential in the field of web development to contribute to company growth and success. My passion for learning is evident in my proactive approach to staying updated with the latest technologies and trends.</p>
                            <div className="slide-btn  w-[175px] lg:m-0 md:m-auto m-auto">
                                <a href="#contact" className="bg-[#59c378]  text-white border-0 rounded-[40px]  font-[600] text-[14px] flex lg:text-[16px] lg:px-[40px]  lg:pt-[15px] lg:pb-[15px] md:text-[14px]  md:pl-[25px] md:pr-[20px] md:pb-[10px] md:pt-[12px] pb-[10px] pt-[10px] justify-center">
                                    <span className="">Hire Me</span>
                                    <div className="ml-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 "
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                            />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div  className="lg:col-span-2 relative lg:top-[-7%] top-[10%] rounded-[50%] lg:left-[30%] left-[25%] z-10">
                            <img src={emon} alt={emon} className="lg:w-[70%] lg:h-[85%] md:w-[50%] w-[60%] h-[85%] rounded-[50%]" />
                            <div className="absolute xl:-left-0 xl:top-[12%] xl:w-[110px] xl:h-[110px] xl:p-[20px] border  xl:rounded-[25px] lg:-left-2 lg:top-[12%] lg:w-[100px] lg:h-[100px] lg:p-[20px] lg:rounded-[25px] md:top-[25px] md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px] -left-2 top-[5%] w-[60px] h-[70px] px-[7px] py-[10px] rounded-[15px] floating-item">
                                <img src={js} alt={js} className='rounded-[0px] ' />
                            </div>
                            <div className="absolute border bg-white  xl:right-[30%] xl:top-[10%] xl:w-[110px] xl:h-[110px] xl:p-[20px] xl:rounded-[25px]  lg:right-[30%] lg:top-[9%] lg:w-[100px] lg:h-[100px] lg:p-[20px] lg:rounded-[25px] md:right-[50%] md:top-[15px] md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px] top-[5%] w-[70px] h-[70px] p-[15px] right-[35%] rounded-[15px] floating-item">
                                <img src={ts} alt={ts} className='rounded-[0px] max-x-[100%]' />
                            </div>
                            <div className="absolute  xl:right-[30%] border xl:bottom-[25%] xl:w-[110px] xl:h-[103px] xl:p-[20px] xl:rounded-[25px]  lg:right-[30%] lg:bottom-[25%] lg:w-[100px] lg:h-[95px] lg:p-[20px] lg:rounded-[25px] md:right-[50%] bg-transparent  md:bottom-[100px]   md:w-[93px] md:h-[88px] md:p-[15px] md:rounded-[15px] right-[40%] bottom-[15%]  w-[70px] h-[70px] p-[15px] rounded-[15px] floating-item">
                                <img src={rjs} alt={rjs} className='rounded-[0px] max-x-[100%] reactjs' />
                            </div>
                            <div className="absolute border bg-white  xl:left-14 xl:bottom-[20%]  xl:w-[100px] xl:h-[98px] xl:p-[14px] xl:rounded-[25px]  lg:left-8 lg:bottom-[20%]  lg:w-[90px] lg:h-[90px] lg:p-[17px] lg:rounded-[25px] bg-transparent  md:left-2 md:bottom-[19%]   md:w-[88px] md:h-[85px] md:p-[15px] md:rounded-[15px] left-0 bottom-[20%] w-[70px] h-[70px] p-[15px] rounded-[15px] floating-item">
                                <img src={tall} alt={tall} className='rounded-[0px] max-x-[100%]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 -z-10">
                    <svg className=" fill-[#FF4155]" width="1038" height="938" viewBox="0 0 1038 938" fill="none"><g opacity="0.5" filter="url(#filter0_f_39_4392)"><circle cx="290.5" cy="282.5" r="247.5"></circle></g><defs><filter id="filter0_f_39_4392" x="-457" y="-465" width="1495" height="1495" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4392"></feGaussianBlur></filter></defs></svg>
                </div>
                <div className="absolute lg:top-[50%] top-[50%] md:top-[54%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 -z-10">
                    <svg className="fill-[#FFE600]" width="1295" height="938" viewBox="0 0 1295 938" fill="none"><g opacity="0.4" filter="url(#filter0_f_39_4393)"><circle cx="647.5" cy="561.5" r="247.5"></circle></g><defs><filter id="filter0_f_39_4393" x="0" y="-86" width="1295" height="1295" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_39_4393"></feGaussianBlur></filter></defs></svg>
                </div>
                <div className="absolute top-0 right-0 -z-10">
                    <svg className="fill-[#48C5EA]" width="752" height="747" viewBox="0 0 752 747" fill="none"><g opacity="0.45" filter="url(#filter0_f_39_4394)"><circle cx="647.5" cy="99.5" r="247.5"></circle></g><defs><filter id="filter0_f_39_4394" x="0" y="-548" width="1295" height="1295" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_39_4394"></feGaussianBlur></filter></defs></svg>
                </div>
                <div className="absolute left-0 bottom-0 -z-10">
                    <img src={line1} alt="" />
                </div>
                <div className="absolute right-0 top-0 -z-10">
                    <img src={line2} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;