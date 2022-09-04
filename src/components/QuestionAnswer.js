import { useContext,useEffect,useState } from "react";
import { userThemeContext } from "../App";
import { A_Center, J_Center } from "../css/ObjectsCss";



const QuestionAnswer = () => {
    const[expanded,setExpanded] = useState([])
    
    const theme = useContext(userThemeContext)

    const container = {
        color:theme.white,
        fontFamily:"swiss721_Light",
        fontWeight:"400",
        fontSize:"clamp(0.95rem,1vw,1.125rem)",
        height:"clamp(350px,70vw, 600px)",
    }
    const question = {
        paddingBlock:"clamp(17px,2vw,26px)",
        borderBottom:"1px solid white",
        display:"flex",
        // width:"clamp(100px,10vw,600px)"
    }
    const answer = {
        width:"clamp(400px,30vw,652px)",
        transition:"height 0.5s",
        overflow:"hidden",
        height:"0",
        display:"flex",
        ...A_Center,
        ...J_Center,
        lineHeight:"175%",
        paddingInline:"2rem",
        marginBlock:"1rem"
        
    }
    const qABlock = {
        cursor:"pointer",
    }
    
    
    useEffect(()=>{
        qa.forEach((value)=>{
            setExpanded((prev)=>{
                return (
                    [...prev,value.expand]
                )
            })
        })
    },[])
    // console.log(expanded)
    const expandFunction = (e) =>{
        let temp = [...expanded]
        if(temp[Array.from(e.currentTarget.parentNode.children).indexOf(e.currentTarget)] === true)
        {
            // console.log("enetered")
            temp[Array.from(e.currentTarget.parentNode.children).indexOf(e.currentTarget)] = !temp[Array.from(e.currentTarget.parentNode.children).indexOf(e.currentTarget)]
            setExpanded(temp)
        }
        else{
            temp.fill(false)
            temp[Array.from(e.currentTarget.parentNode.children).indexOf(e.currentTarget)] = !temp[Array.from(e.currentTarget.parentNode.children).indexOf(e.currentTarget)]
            setExpanded(temp)
        }
    }
  return <>
  <div style={container}>
  {  qa.map((value,index)=>{
        return(
            <div key={index} style={qABlock} onClick={expandFunction}>
            <p style={question}>&nbsp;&nbsp;{value.q}<span style={{marginInlineStart:"auto",display:"inline-block"}}>+</span>&nbsp;&nbsp;</p>
            <p style={expanded[index]?{...answer,height:"150px"}:{...answer}}>{value.a}</p>
            </div>
        )
    })}
  </div>
  </>;
};

const qa = [
  {
    q: <>How can I find my dream job here?</>,
    a: <>
        Lörem ipsum annonsblockerare. Polyd ber on än treras. Ditelig telesam.
        Dongen homoss. Filofas ren, för os, polynade även om våling. Biovältare
        nel medan dinevis, parar. Fän teleligen. Urat våsogt kagt, om än nerade
        pregt. Besm trarade i jyre, intrames. Diar or förnamn medan hömont. 
      </>,
      expand: true
  },
  {
    q: <>How can I build my resume through pavoc?</>,
    a: <>
        Lörem ipsum annonsblockerare. Polyd ber on än treras. Ditelig telesam.
        Dongen homoss. Filofas ren, för os, polynade även om våling. Biovältare
        nel medan dinevis, parar. Fän teleligen. Urat våsogt kagt, om än nerade
        pregt. Besm trarade i jyre, intrames. Diar or förnamn medan hömont. 
      </>,
      expand: false
  },
  {
    q: <>How can I find my dream job here?</>,
    a: <>
        Lörem ipsum annonsblockerare. Polyd ber on än treras. Ditelig telesam.
        Dongen homoss. Filofas ren, för os, polynade även om våling. Biovältare
        nel medan dinevis, parar. Fän teleligen. Urat våsogt kagt, om än nerade
        pregt. Besm trarade i jyre, intrames. Diar or förnamn medan hömont. 
      </>,
      expand: false
  },
  {
    q: <>How can I build my resume through pavoc?</>,
    a: <>
        Lörem ipsum annonsblockerare. Polyd ber on än treras. Ditelig telesam.
        Dongen homoss. Filofas ren, för os, polynade även om våling. Biovältare
        nel medan dinevis, parar. Fän teleligen. Urat våsogt kagt, om än nerade
        pregt. Besm trarade i jyre, intrames. Diar or förnamn medan hömont. 
      </>,
      expand: false
  },
];
export default QuestionAnswer;
