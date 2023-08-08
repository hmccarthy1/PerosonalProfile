import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
    return (<>
    
    <div className="darkHeader">

        <Navigation></Navigation>
      <MobileNavigation></MobileNavigation>

    </div>
    
    </>)
}

export default Header;