import React from "react";

const useMedia = (media) => {
  const [match, setMatch] = React.useState();

  React.useEffect(() => {
    function setMobile() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    setMobile();
    window.addEventListener("resize", setMobile);
    return () => {
      window.removeEventListener("resize", setMobile);
    };
  }, [media]);

  return match;
};

export default useMedia;
