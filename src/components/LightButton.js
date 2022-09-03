
const LightButton = ({bg,color}) =>{
    const button = {
        background: bg,
        color,
        borderRadius: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "clamp(160px,3vw,240px)",
        height: "clamp(50px,5vw,72px)",
        marginBlockEnd: "clamp(20px,2vw,38px)",
        cursor:"pointer"
      };
    return (
        <>
        <div style={button}>How it works</div>
        </>
    )
}

export default LightButton;