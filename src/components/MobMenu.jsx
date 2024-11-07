
// import { useState } from "react";
// import { motion } from "framer-motion";
// import "./header/header.css"; // Ensure your CSS file exists
// import { Menus } from "../../src/utils"; // Keep as is

// export default function MobMenu({ Menus }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [clicked, setClicked] = useState(null);

//   const toggleDrawer = () => {
//     setIsOpen(!isOpen);
//     setClicked(null);
//   };

//   const subMenuDrawer = {
//     enter: {
//       height: "auto",
//       overflow: "hidden",
//     },
//     exit: {
//       height: 0,
//       overflow: "hidden",
//     },
//   };

//   return (
//     <div>
//       <button className="menu-button lg:hidden" onClick={toggleDrawer}>
//         {isOpen ? "Close Menu" : "Open Menu"} {/* Use text instead of icons */}
//       </button>

//       <motion.div
//         className={`menu-drawer ${isOpen ? 'open' : ''}`}
//         initial={{ x: "-100%" }}
//         animate={{ x: isOpen ? "0%" : "-100%" }}
//       >
//         <ul>
//           {Menus.map(({ name, subMenu }, i) => {
//             const isClicked = clicked === i;
//             const hasSubMenu = subMenu?.length > 0;
//             return (
//               <li key={name}>
//                 <span
//                   className="menu-item"
//                   onClick={() => setClicked(isClicked ? null : i)}
//                 >
//                   {name}
//                 </span>
//                 {hasSubMenu && (
//                   <motion.ul
//                     initial="exit"
//                     animate={isClicked ? "enter" : "exit"}
//                     variants={subMenuDrawer}
//                     className="sub-menu"
//                   >
//                     {subMenu.map(({ name }) => (
//                       <li key={name} className="sub-menu-item">
//                         {name} {/* No icons here */}
//                       </li>
//                     ))}
//                   </motion.ul>
//                 )}
//               </li>
//             );
//           })}
//         </ul>
//       </motion.div>
//     </div>
//   );
// }
// import { useState } from "react";
import { useState } from "react"; // Import useState here
import { motion } from "framer-motion";
import "./header/header.css"; // Ensure this is included
import { Menus } from "../../src/utils"; // Keep as is
import { HiMenu, HiX } from 'react-icons/hi';

export default function MobMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };
  
  return (
    <div>
      {/* <button className="menu-button lg:hidden" onClick={toggleDrawer}>
        {isOpen ? "Close Menu" : "Open Menu"} 
      </button> */}
      <button className="menu-button lg:hidden" onClick={toggleDrawer}>
      {isOpen ? (
        <HiX className="w-6 h-6" /> // Close icon
      ) : (
        <HiMenu className="w-6 h-6" /> // Hamburger icon
      )}
    </button>
      

      <motion.div
        className={`menu-drawer ${isOpen ? 'open' : ''}`}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length > 0;
            return (
              <li key={name}>
                <span
                  className="menu-item"
                  onClick={() => setClicked(isClicked ? null : i)}
                >
                  {name}
                </span>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="sub-menu"
                  >
                    {subMenu.map(({ name, desc }) => (
                      <div key={name} className="sub-menu-item">
                        <div className="menu-item-name">{name}</div>
                        <div className="menu-item-desc">{desc}</div>
                      </div>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
