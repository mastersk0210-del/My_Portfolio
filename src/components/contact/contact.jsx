import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
import './contact.css'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

// enter your own web3 forms access key below

    formData.append("access_key", "d7bc2e78-d162-420b-a050-9f37b996a491");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    
      alert(res.message);
    
  };


  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let&apos;s talk</h1>
            <p>I&apos;m currently avaliable to work on challenging position with highly self motivated, so feel free to send me a message about anything that you want. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>mastersk0210@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+353 894002480</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>Dublin, Ireland</p>
                </div>
                
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
