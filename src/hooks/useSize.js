import { useEffect,useState } from "react";

function useSize(size)
{
    const [match, setMatch] = useState(window.matchMedia(size).matches);
    useEffect(() => {
        window.matchMedia(size).addEventListener("change", (e) => {
          setMatch(e.matches);
        });
      },[]);
      console.log(match);
      return match;
}

export default useSize