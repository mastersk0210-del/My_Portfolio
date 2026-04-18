import Services_Data from '../../assets/services_data'
import theme_pattern from '../../assets/theme_pattern.svg'
import './Services.css'

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="title-box">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service,index)=>{
          return <div key={index} className='services-format'>
             <h3>{service.s_no}</h3>
             <h2>{service.s_name}</h2>
             <p>{service.s_desc}</p>
             <div className='services-readmore'>
             </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services
