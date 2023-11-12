import { useEffect, useState } from "react";
import logo from "../../assets/download.png";
import {
  IconButton,
  Drawer,
  ListItem
} from "@material-tailwind/react";
import { Link } from "react-router-dom";



const nav = [
  {
      id: 1,
      title: 'Home',
      link: 'home',
  },
  {
      id: 2,
      title: 'About',
      link: 'about',
  },
  {
      id: 3,
      title: 'Project',
      link: 'project',
  },
  {
      id: 4,
      title: 'Contact',
      link: 'contact',
  },
  {
      id: 5,
      title: 'Blog',
      link: 'blog',
  },


]


const Navber = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [stick, setStick] = useState<boolean>(false);
console.log(stick);
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY > 50 ? setStick(true) : setStick(false);
      return scroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const openDrawer = () => setOpenNav(true);
  const closeDrawer = () => setOpenNav(false);


  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      {
        nav.map((ui, i) => (
          <li key={i} className="p-1 font-[650] text-white">
            <Link to={ui.link} className="">
              {ui.title}
            </Link>
          </li>
        ))
      }
    </ul>
  );
  return (
    <>
      <nav className={`${stick ?" fixed border-b backdrop-blur-3xl bg-[#131313]/30 " :" bg-transparent absolute"} top-0 w-full left-0 rounded-one px-6 py-5 lg:px-2 lg:py-4 z-50`}>
        <div className="container-x flex items-center justify-between">
          <IconButton
            variant="text"
            className=" h-10 w-10 border-2  text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={openDrawer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 p-[3px]  text-[#59c378] border-[#59c378]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </IconButton>
          <div className="md:w-[280px] sm:w-[200px] col:w-[50px] lg:ml-0 md:ml-[40px] sm:ml-[40px] xs:ml-0">
            <Link
              to="/"
              className="lg:text-[40px] md:text-[30px]   font-bold flex items-center lg:justify-start md:justify-center text-white"
            >
              <img src={logo} alt="" className="rounded-[50%] lg:mr-[10px] md:mr-[10px] sm:m-0" />
              乇мσηﾂ
            </Link>
          </div>
          <div className="lg:mr-4 lg:block hidden">
            <div className="">
              {navList}
            </div>
          </div>
          <a className="bg-[#59c378] text-white border rounded-[40px] flex lg:text-[16px] md:text-[14px] text-[14px] font-[600] lg:pl-[35px] lg:pr-[35px] lg:pt-[15px] lg:pb-[15px] md:pl-[25px] md:pr-[20px] md:pb-[10px] md:pt-[12px] pb-[10px] pt-[10px] pr-[10px] pl-[10px] mr-[-18px] lg:mr-0 md:mr-0">
            <span className="">Resume</span>
            <div className="ml-5">
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
      </nav>
      <Drawer open={openNav} onClose={closeDrawer} className="p-4 bg-[#1e1e1e]">
        <div className="mb-8 mt-2 flex items-center justify-between">
          <h2 className="text-white text-[30px] ml-2">乇мσηﾂ</h2>
          <IconButton variant="text" color="white" className="border-white" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
    
        <ul>
        {
        nav.map((ui, i) => (
          <ListItem key={i} className="p-1 font-normal m-5 text-white">
            <Link to={ui.link} className="">
              {ui.title}
            </Link>
          </ListItem>
        ))
      }
        </ul>
      </Drawer>
    </>
  );
};

export default Navber;
