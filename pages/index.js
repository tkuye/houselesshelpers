import Head from 'next/head'
import Link from 'next/link'
import {useState} from "react"
import axios from "axios"
export default function Home() {
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")
  const [response, setResponse] = useState("")
  const sendForm = () => {
    axios.post(process.env.dbURL, {
      email: email,
      comment: comment
    }).then(() => {
      setResponse("Thank you for your information! I will respond to you as soon as possible.")
      setEmail("")
      setComment("")
      setTimeout(() => {setResponse("")}, 5000)
    }).catch(() => {
      setResponse("Something went wrong. Please try again.")
    })
  }
  return (
    
    <div>
  <Head>
    <title>Houseless Helpers</title>
      </Head>
      <div id="header">
        <h1>Pay It Forward</h1>
    </div>

    <div className="container">
   
<div>
<input type="hidden" name="id" value="1FAIpQLSd3mdmfxFE1Yc75IjWDWBgMIzWh9EUVTnaEozAYtj24Ci250w"/>
<input type="hidden" name="pageHistory" value=""/>

<input type="hidden" id="Payment1FAIpQLSd3mdmfxFE1Yc75IjWDWBgMIzWh9EUVTnaEozAYtj24Ci250w" name="paymentId" value=""/>

<div style={{display:'block'}}>
  
  
  <h3 className="h3">
    
    
  </h3>
  
<div>
  
    <div className="form-group">
      <h4>
        
        
      </h4>
      
    <div><script src="https://donorbox.org/widget.js" paypalexpress="true"></script>
<iframe frameBorder="0" height="93px" name="donorbox" scrolling="no" seamless="seamless" src="https://donorbox.org/embed/houseless-helpers?donation_meter_color=%2341a2d8&amp;only_donation_meter=true" style={{maxHeight:'none'}} width="100%"></iframe></div>
      
    </div>

  
  

  
    <div className="form-group">
      <h4 >
        </h4><h1>Houseless Helpers Fundraiser</h1>
        
      
      
        <div><p>Shelters are often in need of basic supplies people rarely consider such as socks, underwear, toothpaste, tampons, toiletries and many others. This fundraiser will be helping the houseless in our local communities by providing them with the basic items they need the most. Anything you can afford to give will make a huge difference in the life of someone less fortunate.<br/>
All donations and contributions will be going to <strong>3</strong> Edmonton-based houseless shelters: <a href="https://hopemission.com/">Hope Mission</a>, <a href="https://e4calberta.org/">E4C</a> and <a href="https://winhouse.org/">WIN House</a>.</p></div>
      
    </div>
  
    <Link href="/living-houseless">
      <h2 className="living-houseless">Click here to check out the Living Houseless Series!</h2>
    </Link>
  

  
    <div className="form-group">
      <h4>
        About Me
      </h4>
      <hr />
      
        <div>
          <p>
            My name is Tosin Kuye and I am a 3rd year student at the University of Alberta.  I am also a member of the Varsity Bears Track and Field Team. After a recent trip to Vancouver and noticing the harsh reality many of the unhoused face on a daily basis, I decided I wanted to do something to make a difference. If you would like to talk more about what you can do to help, please feel free to email me at <a href="mailto:kuye@ualberta.ca">kuye@ualberta.ca</a>.
          </p>
        </div>
      
    </div>
  
  
  

  
    <div className="form-group" >
      <h4 >
        Goal
        
      </h4>
      <hr />
      
        <div><p>My goal is to not only raise awareness about the vulnerable members of our Edmonton community but to raise $5000 to create care packages for the 3 shelters to give away during the holidays. These care packages will contain the most essential items for those in need such as socks, underwear, tampons, lotion and many others. With a goal of creating 100 care packages and a price of $50 per package, $5000 will make a substantial difference to the vulnerable population in Edmonton. I know with your help it can be done. </p></div>
      
    </div>
  
  
  

  
    <div className="form-group">
      <h4>
        Timeline
        
      </h4>
      <hr />
      
<div><p><strong>Final Date to Donate:</strong> December 17, 2021<br/>
<br/><strong>Care Package Assembly Date:</strong> December 19, 2021<br/>
<br/><strong>Care Package Drop Off Date:</strong> December 20, 2021</p></div>
      
    </div>
  
  
    <div className="form-group">
      <h4>
        Donate
      </h4>
      <hr />
      <p>Click this button to make a donation! Thank you for your generosity. </p>
      <script type="text/javascript" defer src="https://donorbox.org/install-popup-button.js"></script><a className="dbox-donation-button" style={{background: '#41a2d8 url(https://donorbox.org/images/red_logo.png) no-repeat 37px',color: '#fff', textDecoration: 'none', fontFamily: 'Poppins', display: 'inline-block',fontSize: '16px', padding:'15px 38px', paddingLeft: '75px', borderRadius: '5px', }} href="https://donorbox.org/houseless-helpers">Donate</a>
    </div>
    <br />
  
  

  
    <div className="form-group">
      <h4>
        Alternatives
        
      </h4>
      
        <div><p></p><hr/>
If you would rather donate bottles or essential items for this fundraiser, feel free to call or text me at <a href="tel:+17809145692">  
(780) 914-5692</a> and someone will come to pick them up!<br/>
<br/>Additionally, you can enter your email below, and I'll be sure to get back to you.<br/>
<br/><strong>Items For the Shelters</strong>: These are all the items the shelters need most. This includes socks, underwear, toiletries, blankets and many more.  Click this <a href="./wsnm.pdf">link</a> to see an infographic of the most important items!<br/>
<br/><strong>Bottle Donation</strong>: These are any recyclables you may have at home. The recyclables will be returned to raise additional funds.<p></p></div>
      
    </div>
  
  
  

  
    <div className="form-group">
      <h4>
        Social Media 
      </h4>
      <hr />
      
        <div><p>Check out our Instagram page <Link href="https://www.instagram.com/houselesshelpers">@houselesshelpers</Link> for updates!</p></div>
      
    </div>
  
  
  

  
    <div className="form-group">
      <h4>
        Contact Information
      </h4>
      <hr />
        <div><p>Feel free to contact me via email at kuye@ualberta.ca or by phone at (780) 914-5692 if you have any questions.</p></div>
      
    </div>
  
  
    <div className="form-group">
      
        <label htmlFor="Widget1377614023">
            <h4>Comments</h4>
            
            
        </label>
        
          
            <small className="form-text text-muted">
              <p>Leave any comments or questions here.</p>
            </small>
          
        
        
        
      
      
        <textarea className="form-control" value={comment} onChange={(e) => setComment(e.target.value)} rows="3"></textarea>
      
      <div id="Error1377614023" className="ff-widget-error"></div>
      
    </div>
  
    <div className="form-group ff-item  ff-text  ff-item-noprd" id="ff-id-712814042">
      
        <label htmlFor="Widget712814042">
            Email Address
            
            
            
        </label>
        
          
            <small id="Static712814042" className="ff-help form-text text-muted">
              <p>If you've left any comments, questions or are looking to donate items, leave your email here.</p>
            </small>
          
        
        
        
      
      
        
          <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)}/>
      
    </div>
  
  

</div>
<div>

    <button type="button" className="btn btn-primary space-bottom" onClick={sendForm}>
      <img id="send-button" src="https://neartail.com/img/send.svg"/>
      Send
    </button>
    <p style={{textAlign: 'center', fontSize:"18px"}}>{response}</p>
</div>
</div>
<div style={{display:'none'}}>
<div>
  <h3 className="h3"></h3>
  <p style={{paddingBottom:'80px'}}>Click Submit to finish.</p>
</div>
<div>
  <button type="button" className="btn btn-secondary">
    Back
  </button>
  <button type="button" className="btn btn-primary">
    Submit
  </button>
</div>
</div>

</div>
</div>
    </div>
  )
}
