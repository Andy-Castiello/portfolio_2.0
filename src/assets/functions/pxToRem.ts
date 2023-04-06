const pxToRem = (pixels:number)=>{

    const rem = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
    
    return pixels/rem;
}

export default pxToRem;