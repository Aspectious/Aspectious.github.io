import NavButton from "./NavButton";

function Header(pagenum) {
        return(
            <div class="header-navbar">
                <div>
                <img class= "header-icon" src="/newpfp-neon.png" height="32" width="32"></img>
                <span>Aspectious.dev</span>
                </div>

                <div>


                {NavButton("Projects", function() {window.location.href = "/projects/"}, pagenum == 1)}
                {NavButton("About Me", function() {window.location.href = "/about/"}, pagenum == 0)}
                {NavButton("Home", function() {window.location.href = "/"}, pagenum == 3)}
                </div>
            </div>

        )

}

export default Header;