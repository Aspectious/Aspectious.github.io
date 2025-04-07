
function NavButton(text, func, sel) {
    function handle(e) {
        e.preventDefault();
        func();
    }
    var btnclass = "header-button";
    if (sel == true) {
        btnclass = "header-button header-button-selected"
    }
    var base = (
        <span class={btnclass} onClick={handle}>
            <span>{text}</span>
        </span>
    )
    return base;
}

export default NavButton;