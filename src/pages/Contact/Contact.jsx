import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-4">
                <h2 className="text-blue-950 font-bold text-5xl mb-16 text-center">Contact Us</h2>
                <p className="text-blue-950 mb-16 text-center">Event management companies specializing in music festivals often have a team of experienced professionals who specialize in different aspects of event planning and execution. They work closely with clients, artists, sponsors, and various vendors to create memorable and successful music festivals that cater to the tastes of the target audience while ensuring a safe and enjoyable experience for all attendees.</p>
                <div className="text-center text-blue-950">
                    <ul className="list-widget">
                        <li className="mb-4">Location: <div>William Street, Melbourne, Australia</div></li>
                        <li className="mb-4">Phone: <div>0052 693 55 22</div></li>
                        <li className="mb-4">Email: <a href="mailto:event@rima.net">event@rima.net</a></li>
                        <li className="mb-4">Office Hour: <div>Mon - Fri : 8am - 6pm</div></li>
                    </ul>
                </div>
                <div className="max-w-[500px] mx-auto mt-16">
                    <div className="grid grid-cols-3 gap-12">
                        <Link to="#"><img className="w-16 mx-4" src="https://i.ibb.co/D4KCpr9/facebook-logo-2019.png" alt="" /></Link>
                        <Link to="#"><img className="w-24 mx-4" src="https://i.ibb.co/KxJdb4W/instagram-icon-white-on-gradient.png" alt="" /></Link>
                        <Link to="#"><img className="w-16 mx-4" src="https://i.ibb.co/vJk7sbQ/Logo-of-Twitter-svg.png" alt="" /></Link>                        
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Contact;