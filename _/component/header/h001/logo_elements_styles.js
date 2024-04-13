// called from "../elements/logo_elements.js";

export default function logo_elements_styles(element) {
	const styles = {
		desktopMax: {
		  maxWidth: height_percentage_30,
		  height: height_percentage_100,
		  background: cw,
		},
		desktopMid: {
		  maxWidth: height_percentage_30,
		  height: height_percentage_100,
		  background: cw,
		},
		desktopMin: {
		  maxWidth: height_percentage_30,
		  height: height_percentage_100,
		  background: cw,
		},
		mobile: {
		  maxWidth: height_percentage_30,
		  height: height_percentage_100,
		  background: cw,
		},
	 };
	 
	 const window_inner_width = window.innerWidth;
	 const breakpointMap = {
		">822": styles.desktopMax,
		"(550, 822]": styles.desktopMid,
		"<550": styles.desktopMin,
	 };
	 
	 const applyStyle = (styles) => {
		for (const property in styles) {
		  element.style[property] = styles[property];
		}
	 };
	 
	 let matchedStyle;
	 
	 if (window_inner_width > 822) {
		matchedStyle = breakpointMap[">822"];
	 } else if (window_inner_width > 550) {
		matchedStyle = breakpointMap["(550, 822]"];
	 } else {
		matchedStyle = breakpointMap["<550"];
	 }
	 
	 if (matchedStyle) {
		applyStyle(matchedStyle);
	 } else if (navigator.userAgent.indexOf('IEMobile') !== -1 || window.orientation !== "undefined") {
		applyStyle(styles.mobile);
	 }

		
	
};