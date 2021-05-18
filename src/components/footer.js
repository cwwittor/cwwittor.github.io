import "../pages/style.css"

function Footer() {
  return (
    <footer>
        <div class ="middlefooter footerscroll">
            <div id="left-info">
                <p><a href="../assets/Resume.pdf">Resume</a></p>
                <p><a href="mailto:cwwittor@ncsu.edu">Email</a></p>
            </div>
            <div id="right-info">
                <p><a href="https://github.com/cwwittor">GitHub</a></p>
                <p><a href="https://www.linkedin.com/in/christian-wittorp-2341b0142/">LinkedIn</a></p>
            </div>
            <p id="Copyright">Copyright© 2021</p>

            <div id="SourceLogo" class="modal">
                <p>Prasong tadoungsorn is the creator of the glasses logo used for the website as per license attribute requirement.</p>

                <button><a id="modal-close" href="#/" rel="modal:close">Close</a></button>
            </div>

            <a class="modal-style" href="#SourceLogo" rel="modal:open">Logo Sourced Image</a>
        </div>

    </footer>
  );
}

export default Footer;