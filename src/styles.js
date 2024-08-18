const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[30px] text-[35px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[15px] text-[15px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[30px] xs:text-[30px] text-[40px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

export const textVariant = () => {
  return {
    hidden: {
      opacity: 0,
      y: -20, 
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.4, 
        delay: 0.1, 
      },
    },
  };
};


export { styles };