import './App.css'
import ContactForm from './ContactForm';

function Feedback (){
    return(
        <div className='serf'>
            <div className='feedbackAll'>
                <h2 className='feedbackName'>FEEDBACK</h2>
                <p className='feedbackText'>We will tell you about all the nuances and answer your questions.</p>
            </div>
            <div>
                <ContactForm />
            </div>
        </div>
    )
}
export default Feedback;