import { Link } from "react-router-dom";

const OurStory = () => {
    return (
        <div className="py-24 bg-blue-50">
            <div className="max-w-[1280px] mx-auto px-4">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="content">
                        <h2 className="text-blue-950 font-bold text-5xl mb-16">Our Story</h2>
                        <p className="text-blue-950 text-justify">Event management for a musical show involves the planning, organization, and execution of a live music event or concert. Whether it's a small local gig, a large-scale music festival, or anything in between, successful event management is crucial for creating a memorable and enjoyable experience for both performers and attendees.</p><br/>
                        <p className="text-blue-950 text-justify">Effective event management is essential for creating a successful musical show that leaves a lasting impression on both the performers and the audience. It requires careful planning, attention to detail, and the ability to adapt to unforeseen challenges that may arise during the event.</p>
                        <button className="btn bg-blue-950 text-white mt-10"><Link to="/about">Learn More</Link></button>
                    </div>
                    <div className="img">
                        <img data-aos="fade-right" className="rounded-lg" src="https://i.ibb.co/wBS5y9V/friendly-team.jpg" alt="Image" />
                    </div>
                </div> 
            </div> 
        </div>
    );
};

export default OurStory;