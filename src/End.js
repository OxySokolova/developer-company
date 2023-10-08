import './App.css'
import logo from './villa-modified.png'
function End(){
    return(
        <div className='endBackgroung'>
            <div className='signature'>
                <p>2023 DevelopmentCompany </p>
                <p>Privacy Policy</p>
            </div>
            <div><img src={logo} alt="logo" width="100px"/></div>
            <div className='signature'>
                <p> +62 (0)371 70 7777</p>
                <p>Jl. Pantai Batu Bolong No.93xx, Canggu,<br /> Kec. Kuta Utara, Bali, Indonesia</p>
                <p>developer_company@gmail.com</p>
            </div>
        </div>
    )
}
export default End;