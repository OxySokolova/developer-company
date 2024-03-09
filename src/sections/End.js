import '../App.css'
import logo from '../assets/villa-modified.png'
function End(){
    return(
        <div className="endBackgroung">
            <div className="signature">
                <p>2023 DevelopmentCompany </p>
                <p>Privacy Policy</p>
            </div>
            <div><img className="endLogo" src={logo} alt="logo" width="100px"/></div>
            <div className="signature">
                <p> +66 37 170 7777</p>
                <p>212-200 Pa Tong, Kathu District,<br /> Phuket 83150, Thailand</p>
                <p>developer_company@gmail.com</p>
            </div>
        </div>
    )
}
export default End;