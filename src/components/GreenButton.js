import { useContext } from "react";

import { userThemeContext } from "../App";

function GreenButton({children})
{
    const theme = useContext(userThemeContext);
    const button = {
        height: "4rem",
        width: "min(11rem,20vw)",
        borderRadius: "5px",
        backgroundColor: theme.primary,
        color: theme.white,
        border: "none",
        cursor: "pointer",
        fontWeight: "600",
      };
return(
    <>
    <button style={button}>{children}</button>
    </>
)    
}

export default GreenButton