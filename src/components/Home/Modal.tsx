import { AiOutlineClose } from "react-icons/ai";
import { IProject } from "./Project";

type BooleanCase = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedProject: IProject | undefined;
}

const Modal = ({ isOpen, setIsOpen, selectedProject }: BooleanCase) => {
    console.log(selectedProject)
    if (!isOpen) {
        return null; // or some other way to conditionally render when the modal is closed
    }
    return (
        <div className={`modal ${isOpen ? "" : "opacity-0 pointer-events-none"} fixed overflow-hidden w-full h-full top-0 left-0 flex items-center justify-center z-[99]`}>
            <div onClick={() => setIsOpen(false)} className=" absolute w-full h-full bg-gray-900 opacity-70"></div>
            <div className=" bg-white w-[60%] h-[70%]  rounded shadow-lg z-50 overflow-y-auto">
                <div className="absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-[7rem] mr-[2rem] text-white text-[35px] z-50" onClick={() => setIsOpen(false)}>
                    <AiOutlineClose className='text-white' />
                    <span className="text-lg text-white">(Esc)</span>
                </div>
                <div className="modal-content py-4 text-left px-6">
                    <div className="p-5">
                        <div>
                            <img src={selectedProject?.img} alt="" />
                        </div>
                        <div className="grid grid-cols-3">
                            <div className="pt-2 col-span-2 ">
                                <h3 className="text-[#6f6b80] text-[24px] font-semibold mb-2">Details</h3>
                                <h1 className="text-black text-[35px] font-semibold ">{selectedProject?.title}</h1>
                                <p className="text-black  mt-2 mr-10 text-[17px] leading-1 ">{selectedProject?.description}</p>
                            </div>
                            <div className="mt-10 col-span-1 ">
                                <h2 className="text-2xl text-black mb-2 font-semibold">Technology</h2>
                                <div className="flex flex-wrap">

                                    {selectedProject?.tech.map((v, i) => (
                                        <div key={i} className="border border-[#59c378] rounded-md p-2 mx-3 my-2">
                                            <p className="text-xm">{v}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-start pt-2">
                            <div className="mx-2 mb-5">
                                <a href={selectedProject?.pUrl} className="border-b border-[#59c378] " target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                            <div className="mx-2 mb-5">
                                <a href={selectedProject?.cUrl} className="border-b border-[#59c378] " target="_blank" rel="noopener noreferrer">Frontend Github</a>
                            </div>
                            {selectedProject?.sUrl && (
                                <div className="mx-2 mb-5">
                                    <a href={selectedProject?.sUrl} className="border-b border-[#59c378] " target="_blank" rel="noopener noreferrer">Server Github</a>
                                </div>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Modal;