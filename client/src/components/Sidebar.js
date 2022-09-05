import Wrapper from "../assests/Wappers/Sidebar";
import { useAppContext } from "../context/appContext";
import { CgCloseR } from "react-icons/cg";
import { Link } from "react-router-dom";
import { SiGoogletagmanager, SiManageiq } from "react-icons/si";

const Sidebar = () => {
  const { navSidebar, closeSidebar, openSidebar } = useAppContext();
  return (
    <Wrapper>
      <div className={navSidebar ? "sidebar show-sidebar" : "sidebar"}>
        <button className="close-btn" onClick={closeSidebar}>
          <CgCloseR />
        </button>
        <div className="logo-containers">
          <span className="icon">
            <SiGoogletagmanager></SiGoogletagmanager>
          </span>
          <span className="title">PontexIM</span>
        </div>
        <div className="links-container">
          <Link to={"/"} onClick={closeSidebar} className="link">
            <span className="link-name">Home</span>
          </Link>
          <Link to={"/inventory"} onClick={closeSidebar} className="link">
            <span className="link-name">Inventory</span>
          </Link>
          <Link to={"/transaction"} onClick={closeSidebar} className="link">
            <span className="link-name">History</span>
          </Link>
          <Link to={"/report"} onClick={closeSidebar} className="link">
            <span className="link-name">Transaction</span>
          </Link>
          <Link to={"/register"} onClick={closeSidebar} className="link">
            <span className="link-name">Logout</span>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
