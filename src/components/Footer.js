import { mainContainer,h1,p, Flex, J_Center, A_Center } from "../css/ObjectsCss"

const Footer = ()=>{
    const head = {
        maxWidth: "965px",
        fontSize: "clamp(2.813rem,4vw,4.25rem)",
        marginBlockEnd: "min(1vw,12px)",
        marginInlineEnd:"min(2.5vw,2rem)",
        textAlign:"center"
      };
      const left ={
        ...Flex,
        ...J_Center,
        ...A_Center,
        flexShrink:"0",
        flexDirection:"column"
      }
    return(<>
    <div style={{...mainContainer,paddingInline:"0",  marginBlockStart: "4.5rem",}}>
    <div style={left}>
    <h1 style={{...h1,...head}}>Pavoc</h1>
    <p style={{...p}}>insearch of finding your piece</p>
    </div>
    <div style={{...Flex,...A_Center,justifyContent:"flex-end",width:"100%"}}>
        Copyrights @ 2022    
    </div>
    </div>
    </>)
}

export default Footer