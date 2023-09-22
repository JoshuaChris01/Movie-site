import { RiThreadsFill, RiTwitterXFill, RiWhatsappLine, RiYoutubeFill } from 'react-icons/ri'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'


function Notice() {
    return (
        <div className="notice-container">
            <div className="container">
                <h1>🎬 Stay Informed About Our Upcoming Movies! 🍿</h1>
                <p className="first-para">Be the first to know about the latest movies coming to our site! Follow us on Twitter and Instagram for exclusive updates, sneak peeks, and more.
                </p>
                <p className="link-contents">Follow us on our social media handles below: </p>

                <div className='icon-container'>

                    <div className='icons facebook'>
                        <span><i className='ico facebook'><FaFacebookF /></i></span>
                        <div className='tooltip'>
                            Facebook
                        </div>

                    </div>

                    <div className='icons twitter'>
                        <span><i className='ico twitter'><RiTwitterXFill /></i></span>
                        <div className='tooltip'>
                            X
                        </div>

                    </div>
                    <div className='icons instagram'>
                        <span><i className='ico facebook'><BsInstagram /></i></span>
                        <div className='tooltip'>
                            Instagram
                        </div>

                    </div>
                    <div className='icons youtube'>
                        <span><i className='ico youtube'><RiWhatsappLine /></i></span>
                        <div className='tooltip'>
                            
                            WhatsApp
                        </div>

                    </div>
                    <div className='icons threads'>
                        <span><i ico facebook><RiThreadsFill /></i></span>
                        <div className='tooltip'>
                            Threads
                        </div>

                    </div>
                </div>
              
                <p className='second-para'>
                By following us, you'll be among the first to know about our upcoming releases, special screenings, and behind-the-scenes insights.<br />
                 Join our growing community of movie enthusiasts and never miss an exciting moment.<br />
                 <br />

Stay connected and stay entertained with us!
                </p>



            </div>
        </div>
    )
}

export default Notice