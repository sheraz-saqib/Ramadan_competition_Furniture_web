const openSidebar = () => {
    var a=document.getElementById("mySidebar");
    a.style.width = "17rem";
    a.style.transition = "0.2s";
};

const closeSidebar = () => {
    var a=document.getElementById("mySidebar");
    a.style.width = "0";
    a.style.transition="0.3s"
    document.querySelectorAll(".btn").setAttribute("class", "btnclose");
};
const closeCate = () => {
    var a = document.getElementById("responsive_dropdown");
    a.classList.toggle("display_cate")
}