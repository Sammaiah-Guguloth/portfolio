const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-[#1c1c21] flex justify-between items-center flex-wrap gap-5">
      <div className="text-[#62646c] flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          className="social-icon"
          href="https://github.com/Sammaiah-Guguloth/"
          target="_blank"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        {/* <div className="social-icon">
          <img
            src="/assets/twitter.svg"
            alt="twitter"
            className="w-1/2 h-1/2"
          />
        </div> */}
        <a
          href="www.linkedin.com/in/guguloth-sammaiah"
          target="_blank"
          className="social-icon"
        >
          <img
            src="/assets/linkedin.png"
            alt="Linkedin"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>

      <p className="text-[#62646c]">
        © 2024 Sammaiah Guguloth. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
