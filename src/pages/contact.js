import "./style.css"; 


function Contact() {
    return (
        <section class="frilly">
            <section id="contact-box">
                <h2 class="header-contact">Contact Me:</h2>
                <form action="https://formspree.io/f/xgepbzvl" method="POST">
                    <div class= "content-box">
                        <label for="name">Name:
                            <input type="text" name="name" id="name" placeholder="John Smith"/>
                        </label>
                    </div>
                    <br/>
                    <div class= "content-box">
                        <label for="email">Email:
                            <input type="text" name="email" id="email" placeholder="example@gmail.com"/>
                        </label>
                    </div>
                    <br/>
                    <div class= "content-box">
                        <label>Comments:</label>
                        <br/>
                        <textarea name="comments" rows="12" cols="35">Any comments you'd like to make?</textarea>
                    </div>
                    <br/>
                    <input type="submit" name="submit" value="Send"/>
                </form>

                
            </section>
        </section>
    );
}

export default Contact;