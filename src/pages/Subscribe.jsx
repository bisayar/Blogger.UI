import { useState } from "react"
import Icon from "../font-icon/Icon"
import api from "../services/config"

function Subscribe() {
    const [email , setEmail] = useState("")
    const [alert , setAlert] = useState("")

    const subscribeHandler = ()=> {
        if(!email){
            setAlert("Please Enter Valid Data! ")
            console.log("Please Enter Valid Data!")
            return;
        }
        // setAlert("")

        const postEmail = async ()=> {
            try{
                await api.post('/Subscribe' , {email})
                .then((response) => console.log(response))
            }catch(error){
                console.log(error.message)
            }
        }
        postEmail();
    }

    return (
        <>
        {/* className={!email && "error-input"} */}
          <div className="subscribe-box">
              <form action="">
                  <h1 className="subscribe-title">Subscribe</h1>
                  <div className="subscribe-field d-flex align-items-center gap-2 justify-content-between flex-column flex-sm-row ">
                      <input type="email" placeholder="example@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                      <button type="button" className="d-flex align-items-center justify-content-center gap-2" onClick={subscribeHandler}>
                          <Icon color="#fff" size={20} icon="Paper_Plane" />
                          Send Me
                      </button>
                  </div>
                  <p className="AZ-copyright">{alert}</p>
                  {/* <p className="AZ-copyright">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> */}
              </form>
          </div>
        </>
    )
}
  
  export default Subscribe