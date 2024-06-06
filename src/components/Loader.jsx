import { RotatingLines } from "react-loader-spinner"

function Loader() {
  return (
    <div className="AZ-loader d-flex align-items-center justify-content-center"><RotatingLines width="60px" height="60px" strokeWidth="3" strokeColor="#6F49E8" /></div>
  )
}

export default Loader