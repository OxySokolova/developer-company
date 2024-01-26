import './App.css'

function Information() {
    return(
        <div>
        {/* прокручивающееся фото */}
        <div className="parallaxTwo"></div>

        <div className="infoContainer">
            <div className="infoBoxLeft">
            <h3 className="infoHead">WE TAKE CARE OF THE <span className="blueWords">ENTIRE PROCESS</span> OF BUILDING YOUR VILLA</h3>
            <p className="infoPar"><span className="lightBlueWords">YOU </span><span className="blueWords"><b>DO NOT INCUR ANY ADDITIONAL COSTS</b></span> <span className='lightBlueWords'> FROM THE IDEA TO THE MEETING OF THE FIRST TENANTS OF YOUR VILLA</span></p>
            </div>

            <div className="infoBoxRight">
            <ul>
                <li><b>SEARCH FOR A LAND PLOT IN THE MOST POPULAR AREAS OF THAILAND</b> we screen for construction suitability, slope, soil, ground water, etc.</li>
                <li><b>DEVELOPMENT OF ARCHITECTURAL AND DESIGN PROJECTS</b> we engage with local and foreign architects to deliver results that fit your needs</li>
                <li><b>REGISTRATION OF ALL DOCUMENTS</b> we conduct due diligence at various stages of the process</li>
                <li><b>CONSTRUCTION TAKES 10-12 MONTHS ON AVERAGE</b> during this time we project manage and share regularly photo and video reports</li>
                <li><b>WE OFFER INTERIOR SOLUTIONS FOR EACH VILLA (FOR AN ADDITIONAL FEE)</b> the turnkey villa includes furniture, appliances and everything you need for renting, including dishes, plants, curtains and bed linens</li>
                <li><b>PROFESSIONAL MANAGEMENT COMPANY WITH 8 YEARS OF EXPERIENCE</b> which deals with the placement of the object on the sites, reception of clients, personnel management, payment of all expenses, repairs, controls and so on</li>
            </ul>
            </div>
        </div>
        </div>
    )
}

export default Information;