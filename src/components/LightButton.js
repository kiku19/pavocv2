
const LightButton = ({children,styles}) =>{
    const button = {
        borderRadius: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "clamp(160px,3vw,240px)",
        height: "clamp(50px,5vw,72px)",
        marginBlockEnd: "clamp(20px,1.6vw,32px)",
        cursor:"pointer"
      };
    return (
        <>
        <div style={{...button,...styles}}>{children}</div>
        </>
    )
}

export default LightButton;