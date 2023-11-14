import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { MdOutlineLocationOn } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

type emailjsForm = {
    name: string;
    email: string;
    phone: string;
    message: string;
}
const Contact = () => {
    const { register, handleSubmit, reset, } = useForm<emailjsForm>()

    const onSubmit: SubmitHandler<emailjsForm> = (data) => {
        emailjs.send('service_c7b3egs', 'template_h0gym5c', data, 'cM0fn5tLCEsz3ygoW')
            .then((res) => {
                if (res.text === "OK") {
                    swal("Thank you!", "Your message was sent successfully.", "success");
                    reset();
                    return;
                }
                swal("Sorry!", "Something went wrong. Please try again later", "error");
            }, (err) => { swal("Sorry!", "Something went wrong. Please try again later", "error"); console.log(err) })
    }
    return (
        <div id='contact' className="pb-[40px]  pt-[120px]  bg-[#191919] lg:mb-0  ">
            <div className="container-x">
                <div className="row">
                    <div className="max-w-[640px] mx-auto text-center text-white mb-[60px] md:mb-[40px]">
                        <h2 className="heading-font font-bold lg:text-5xl md:text-[35px] text-[28px] mb-[15px]">
                            Let's Talk
                        </h2>
                        -
                        <p className="base-font lg:text-lg md:text-md text-sm font-normal">
                            I'd Love to hear from you. Whether you have a question or just
                            want to say Hi, feel free to drop a message. I'll try my best to
                            get back to you!
                        </p>
                    </div>
                </div>
                <div className="container-x flex flex-row flex-wrap justify-center">
                    <div  className="lg:basis-1/2 basis-full">
                        <div className="mb-[60px] bg-[#222121] border border-[#464646] rounded-[5px] shadow-sm shadow-[#323232] px-[65px] pt-[60px] pb-[30px]">
                            <h2 className="text-[30px] font-[600] text-center text-white mt-[28px] mb-[25px]">
                                Get In Touch
                            </h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="mb-[31px]">
                                    <input
                                        className="bg-transparent border-0 border-b border-[#464646] rounded-none shadow-none text-[#fff] h-[50px] w-[100%] py-[15px] pr-[15px] pl-0 focus:border-[#FFE600] focus:outline-0 placeholder:text-white"
                                        type="text"
                                        placeholder="Your Name"
                                        {...register('name', { required: true })}
                                    />
                                </div>
                                <div className="mb-[31px]">
                                    <input
                                        className="bg-transparent border-0 border-b border-[#464646] rounded-none shadow-none text-[#fff] h-[50px] w-[100%] py-[15px] pr-[15px] pl-0 focus:border-[#FFE600] focus:outline-0 placeholder:text-white"
                                        type="email"
                                        placeholder="Your Email"
                                        {...register('email', { required: true })}
                                    />
                                </div>

                                <div className="form-field mb-[31px]">
                                    <input
                                        className="bg-transparent border-0 border-b border-[#464646] rounded-none shadow-none text-[#fff] h-[50px] w-[100%] py-[15px] pr-[15px] pl-0 focus:border-[#FFE600] focus:outline-0 placeholder:text-white"
                                        type="string"
                                        placeholder="Your phone"
                                        {...register('phone', { required: true })}
                                    />
                                </div>
                                <div className="form-field mb-[31px]">
                                    <textarea
                                        className="bg-transparent border-0 border-b border-[#464646] rounded-none shadow-none text-[#fff] h-[165px] w-[100%] py-[15px] pr-[15px] pl-0 focus:border-[#FFE600] focus:outline-0 placeholder:text-white"
                                        id=""
                                        placeholder="Message"
                                        {...register('message', { required: true })}
                                    />
                                </div>
                                <div className="clear-both float-none mt-[35px] text-center">
                                    <button
                                        type="submit"
                                        className="bg-[#59c378]  text-white border-0 rounded-[40px]  font-[600] text-[14px] lg:text-[16px] lg:px-[40px]  lg:pt-[15px] lg:pb-[15px] md:text-[14px]  md:pl-[25px] md:pr-[20px] md:pb-[10px] md:pt-[12px] pb-[10px] pt-[10px] pr-[10px] pl-[10px] mb-[30px]"
                                    >
                                        Submit Now {`-->`}
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="lg:basis-[27%] basis-full ">
                        <div  className="w-max-[395px] lg:pl-[20px] md:pl-0 pl-0">
                            <div className="bg-[#222121] border border-[#464646] rounded-[5px] lg:mb-[30px] lg:px-[40px] lg:py-[33px] md:mb-[30px] md:px-[30px] md:py-[23px] mb-10 py-8  shadow-[#323232]">
                                <h2 className='text-white lg:text-[24px] md:text-[22px] font-[600] mb-[15px] mt-0'>South Manda, Dhaka - 1214</h2>
                                <div className="items-center flex">
                                    <div className="bg-[#2e2e2e] rounded-[50%] shadow-sm shadow-[#323232] h-[70px] lg:h-[90px] mr-[20px] w-[70px] lg:w-[90px] md:w-[80px] md:h-[80px]">
                                        <MdOutlineLocationOn className='text-[#ffe600] text-[40px] lg:text-[50px] md:text-[40px] lg:m-[20px] m-[14px] md:m-[20px] text-center leading-[90px] ' />
                                    </div>
                                    <div className="info-text">
                                        <span className="text-[#d8d8d8] text-[16px] lg:text-[18px]  md:text-[18px] font-[300]">
                                            Home Address
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div  className="bg-[#222121] border border-[#464646] rounded-[5px] lg:mb-[30px] lg:px-[40px] lg:py-[33px] md:mb-[30px] md:px-[30px] md:py-[23px] mb-10 py-8 shadow-[#323232]">
                                <h2 className='text-white text-[20px] lg:text-[24px] md:text-[22px] font-[600] mb-[15px] mt-0'>emonibnsalim@gmail.com</h2>
                                <div className="items-center flex">
                                    <div className="bg-[#2e2e2e] rounded-[50%] shadow-sm shadow-[#323232] h-[70px] lg:h-[90px] mr-[20px] w-[70px] lg:w-[90px] md:w-[80px] md:h-[80px] ">
                                        <AiOutlineMail className='text-[#ffe600] text-[40px] lg:text-[50px] md:text-[40px] lg:m-[20px] m-[14px] md:m-[20px] text-center leading-[90px] ' />
                                    </div>
                                    <div className="info-text">
                                        <span className="text-[#d8d8d8] text-[16px] lg:text-[18px]  md:text-[18px] font-[300]">
                                            Official Mail
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div  className="bg-[#222121] border border-[#464646] rounded-[5px] lg:mb-[30px] lg:px-[40px] lg:py-[33px] md:mb-[30px] md:px-[30px] md:py-[23px] mb-10 py-8 shadow-[#323232]">
                                <h2 className='text-white text-[20px] lg:text-[24px] md:text-[22px] font-[600] mb-[15px] mt-0'>+8801903245299</h2>
                                <div className="items-center flex">
                                    <div className="bg-[#2e2e2e] rounded-[50%] shadow-sm shadow-[#323232] h-[70px] lg:h-[90px] mr-[20px] w-[70px] lg:w-[90px] md:w-[80px] md:h-[80px]">
                                        <BiPhoneCall className='text-[#ffe600] text-[40px] lg:text-[50px] md:text-[40px] lg:m-[20px] m-[14px] md:m-[20px] text-center leading-[90px] ' />
                                    </div>
                                    <div className="info-text">
                                        <span className="text-[#d8d8d8] text-[16px] lg:text-[18px]  md:text-[18px]  font-[300]">
                                            Official Number
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;
