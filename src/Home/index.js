import "./index.css"

const Home = () => {
    return (
        <div className="bg-conttainer">
            <div className="inner1-container">
                <div className="image-container">
                    <img src="1.png" className="image" alt="next" />
                </div>
                <div className="inner2-container">
                    <div className="image2-container">
                        <img src="logo.png" className="logo" alt="next" />
                    </div>
                    <h1 className="inner-heading"> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
                    <ul>
                        <li className="inner-paragraph">C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li className="inner-paragraph">C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                    </ul>
                    <div className="main-img-container">
                        <img src="2.png" alt="next" className="main-image" />

                    </div>
                    <p className="inner-paragraph">Government of India has awarded the <span className="bold-name">"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                </div>

            </div>
            <div className="inner3-container">
                <p className="inner-para-cap">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
                <div className="image3-container">
                    <img src="3.png" alt="next" className="last-img" />
                </div>
                <p className="inner3-para">
                    Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
                </p>
            </div>
            <hr className="horizonatal-line" />
            <div className="footer">
                <h1 className="foot-head"> C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h1>
                <p className="foot-para"> CHEMICALS <span className="vertical">|</span> PROCESS POWER WATER <span className="vertical">|</span> WASTE WATER OILS <span className="vertical">|</span> GAS PHARMA SUGARS <span className="vertical">|</span> DISTILLERIES PAPER <span className="vertical">|</span> PULP MARINE <span className="vertical">|</span> DEFENCE METAL <span className="vertical">|</span> MINING FOOD <span className="vertical">|</span> BEVERAGE PETROCHEMICAL <span className="vertical">|</span> REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE <span className="vertical">|</span> RESIDENTIAL</p>
            </div>
            <div className="bottom">
                <div className="icon-conatiner">
                    <i className=" bi bi-telephone icon"></i>
                    <p className="icon-para">
                        Toll free 1800 200 1234
                    </p>
                </div>
                <div className=" icon-conatiner">
                    <i className="bi bi-facebook icon"></i>
                    <p className=" icon-para">
                        www.facebook.com/cricpumps
                    </p>
                </div>
                <div className="icon-conatiner">
<i className="bi bi-globe  icon"></i>
                    <p className=" icon-para">
                        www.crigroups.com
                    </p>
                </div>
            </div>

        </div>

    )
}


export default Home