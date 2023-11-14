import Slides from "./Slides";
import './App.css';


function About() {

    return(
        <div>
    <div className="aboutHead">
        <img className="aboutImg" src="https://static.tildacdn.com/tild3732-3037-4133-a566-303830613035/free-icon-podium-824.png" alt="emblem" width="50px"/>
        <p className="aboutHeadText">We offer the best value for money properties that strike a balance of excellent location, low acquisition cost and high rental yields</p>
        <img  className="aboutImg" src="https://static.tildacdn.com/tild3739-3361-4534-b132-303133333138/free-icon-hands-5773.png" alt="emblemHands" width="50px"/>
        <p className="aboutHeadText">Full support for all stages of the transaction, even remotely. Legality and transparency of all processes. Installments by stages of construction</p>
        <img className="aboutImg" src="https://static.tildacdn.com/tild3263-6539-4361-a332-653034386565/free-icon-house-9419.png" alt="emblemHouse" width="50px"/>
        <p className="aboutHeadText">An experienced management company will ensure the efficient operation of your investments</p>
    </div>

    <div>
    <h1 className="aboutHeadName"><span className="blueWords"> MODERN </span>PRIVATE <span className="blueWords">VILLAS</span></h1>
    <p className="aboutHeadPar">A unique complex in close proximity to the sea on a view plot <br/> with rice fields in the most popular tourist area of Phuket</p>
    </div>

    <div className="aboutDescriptPar">
        <p className="lines">in a quiet location without traffic and noise, but a couple of minutes from the hot spots of Patong</p>
        <p className="lines">stylish design with preservation of Thai atmosphere</p>
        <p className="lines">high quality climate-aware and smart space</p>
    </div>
    {/* прокручивающееся фото */}
    <div className="parallax"></div>

    <Slides/>

    <div className="aboutLocation">
        <img className="aboutImg" src="https://static.tildacdn.com/tild6230-3661-4237-b061-353230653739/exercise_.png" alt="emblemPerson" width="50px"/>
        <p className="aboutHeadText">EASY ACCESS TO THE MOST POPULAR AND VISITED FITNESS/CROSSFIT CLUBS IN THAILAND</p>
        <img className="aboutImg" src="https://static.tildacdn.com/tild6531-3361-4432-b038-633538363466/island-with-palm-tre.png" alt="emblemPalm" width="50px"/>
        <p className="aboutHeadText">A 14-MINUTE DRIVE FROM KARON BEACH AND BEACH CLUB</p>
        <img className="aboutImg" src="https://static.tildacdn.com/tild3134-6332-4838-a365-363434346232/flash_.png" alt="emblemLightning" width="50px"/>
        <p className="aboutHeadText">A FEW MINUTES TO THE HOTTEST SPOTS OF PATONG</p>
    </div>

    <div className="aboutBlockPhotoRooms">
        <div className="aboutPhotoRooms-oneBlock">
    <img className="aboutImageRoom" src="https://img.freepik.com/free-photo/modern-styled-small-entryway_23-2150712951.jpg?size=626&ext=jpg&ga=GA1.2.84432645.1669720629&semt=ais" alt="" width="350px" height="230px"/>
    <img className="aboutImageRoom" src="https://img.freepik.com/premium-photo/architectural-rendering-bathroom-spa-salon_202873-2945.jpg?size=626&ext=jpg&ga=GA1.1.84432645.1669720629&semt=ais" alt="" width="350px" height="230px"/>
        </div>
        
    <img className="aboutImageRoom-center" src="https://img.freepik.com/free-photo/bedroom-with-balcony-plants-wall_1340-34194.jpg?size=626&ext=jpg&ga=GA1.1.84432645.1669720629&semt=ais" alt="" width=""/>
        
        <div className="aboutPhotoRooms-twoBlock">
    <img className="aboutImageRoom" src="https://img.freepik.com/free-photo/indoor-design-luxury-resort_23-2150497253.jpg?size=626&ext=jpg&ga=GA1.1.84432645.1669720629&semt=ais" alt="" width="350px" height="230px"/>
    <img className="aboutImageRoom" src="https://img.freepik.com/free-photo/modern-styled-entryway_23-2150695895.jpg?size=626&ext=jpg&ga=GA1.1.84432645.1669720629&semt=ais" alt="" width="350px" height="230px"/>
        </div>
    </div>
   
    <div className="aboutFiveBoxes">
    <div className="aboutBox">
        <p><span className="blueWords">CONSTRUCTION </span> 
        has already started</p>
    </div>
    <div className="aboutBox">
        <p><span className="blueWords">INSTALLMENTS </span>
        by stages of construction</p>
    </div>
    <div className="aboutBox">
        <p><span className="blueWords">APRIL - MAY 24 </span>
        delivery of the complex</p>
    </div>
    <div className="aboutBox">
        <p><span className="blueWords">LEASEHOLD </span> 
        30 years with extansion</p>
        </div>

        <a href="/#consultation" className=' item'>
        <button className="aboutDarkBox" >GET THE PROFITABILITY CALCULATION</button>
        </a>

    </div>
    </div>
    )
}

export default About;