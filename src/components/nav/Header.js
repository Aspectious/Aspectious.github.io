import NavButton from "./NavButton";

function Header(pagenum) {
        return(
            <div class="header-navbar">
                <div>
                <img class= "header-icon" src="/newpfp-neon.png" height="32" width="32"></img>
                </div>
                <div>
                </div>
                <div class="header-button-center">

                    {NavButton("Home", function() {window.location.href = "/"}, pagenum == 3)}
                    {NavButton("Projects", function() {window.location.href = "/projects/"}, pagenum == 1)}
                    {NavButton("About Me", function() {window.location.href = "/about/"}, pagenum == 0)}
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>

        )

}

export default Header;