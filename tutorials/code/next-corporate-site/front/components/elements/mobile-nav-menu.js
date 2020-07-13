import PropTypes from "prop-types";
import Image from "./image";
import {
  mediaPropTypes,
  linkPropTypes,
  buttonLinkPropTypes,
} from "utils/types";
import ButtonLink from "./button-link";
import { useLockBodyScroll } from "utils/hooks";

const MobileNavMenu = ({ navLogo, navLinks, navButton, closeSelf }) => {
  // Prevent window scroll while mobile nav menu is open
  useLockBodyScroll();

  return (
    <div className="w-screen h-screen fixed top-0 left-0 overflow-y-scroll bg-white z-10 py-6">
      <div className="container h-full flex flex-col justify-between">
        {/* Top section */}
        <div className="flex flex-row justify-between items-center">
          {/* Company logo */}
          <Image media={navLogo} className="h-8 w-auto object-contain" />
          {/* Close button */}
          <button onClick={closeSelf} className="py-1 px-1">
            <img
              src="/icons/cross.svg"
              alt="Close"
              className="h-8 w-auto -my-1 -mr-1"
            />
          </button>
        </div>
        {/* Bottom section */}
        <div className="flex flex-col justify-end w-9/12 mx-auto">
          <ul className="flex flex-col list-none gap-6 items-baseline text-xl mb-10">
            {navLinks.map((navLink) => (
              <li key={navLink.id} className="block w-full">
                <a
                  href={navLink.url}
                  className="hover:text-gray-900 py-6 flex flex-row justify-between items-center"
                >
                  <span>{navLink.text}</span>
                  <img
                    src="/icons/chevron.svg"
                    alt=""
                    className="transform -rotate-90 h-3 w-auto"
                  />
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink button={navButton} />
        </div>
      </div>
    </div>
  );
};

MobileNavMenu.propTypes = {
  navLogo: mediaPropTypes,
  navLinks: PropTypes.arrayOf(linkPropTypes),
  navButton: buttonLinkPropTypes,
  closeSelf: PropTypes.func,
};

export default MobileNavMenu;