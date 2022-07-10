import { Link } from "react-router-dom"
import Image from "../shared/Image"
import logo from "../../assets/images/logo.svg"

const Logo = () => (
  <div className="brand">
    <h1 className="m-0">
      <Link to="/">
        <Image src={logo} alt="Abstract" width={32} height={32} />
      </Link>
    </h1>
  </div>
)

export default Logo