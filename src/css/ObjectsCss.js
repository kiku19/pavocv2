export const Container = {
  marginInline: "auto",
  maxWidth: "min(1920px,95%)",
  fontFamily: "archivoRegular",
};

export const Flex = {
  display: "flex",
};
export const J_Center = {
  justifyContent: "center",
};
export const J_Btwn = {
  justifyContent: "space-between",
};
export const A_Center = {
  alignItems: "center",
};
export const J_Start = {
  justifyContent: "start",
};
export const A_SelfCenter = {
  alignSelf: "center",
};
export const mainContainer = {
  ...Container,
  ...Flex,
  marginBlockStart: "min(50px,2.5vw)",
  paddingInline: "min(180px,6vw)",
};

export const mainContainerMobile = {
  fontFamily: "swiss721_Normal",
  marginInline: "2.5rem",
  marginBlockStart: "3.5rem",
};
export const h1 = {
  fontFamily: "swiss721_Bold",
  fontWeight: "700",
  fontSize: "clamp(2.5rem,5vw,5rem)",
  lineHeight: "clamp(3rem,6vw,6rem)",
  letterSpacing: "-0.045em",
  background: "linear-gradient(107.13deg, #29A37A 15.4%, #000000 94.34%)",
  webkitBackgroundClip: "text",
  color: "transparent",
  maxWidth: "615px",
  marginBlockEnd: "min(56px,2.5vw)",
};

export const p = {
  fontFamily: "swiss721_Normal",
  fontWeight: "300",
  fontSize:"clamp(1rem,2vw,1.125rem)",
  letterSpacing: "-0.045rem",
  lineHeight: "clamp(2rem, 1vw, 3rem)",
  color: "#004B0C",
  maxWidth: "495px",
  marginBlockEnd:"min(4rem,4vw)"
};

export const h1Mobile = {
  textAlign:"center"
}

export const img = {
  width: "100%", height: "clamp(300px,35vw,600px)"
}

export const h3 = {
  background: "linear-gradient(107.13deg, #29A37A 15.4%, #000000 94.34%)",
  webkitBackgroundClip: "text",
  color: "transparent",
  lineHeight: "1.313rem",
};
