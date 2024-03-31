const _cursor_dot = document.querySelector(".curser_dot"),
_cursor_outline = document.querySelector('.cuser_outlined')


window.addEventListener('mousemove',(e)=>{
    let x = e.clientX;
    let y = e.clientY;
    _cursor_dot.style.left = `${x}px`
    _cursor_dot.style.top = `${y}px`
    _cursor_outline.animate({
        left:`${x}px`,
        top: `${y}px`
    },{duration:200,fill:"forwards"})
    
})

