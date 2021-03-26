import NavItem from './NavItem';

const listaIconos = [
    {icon:"fa-bell", notification:"3+", identif:"alertsDropdown"},
    {icon:"fa-envelope", notification:"7", identif:"messagesDropdown"}
] 

function Topbar() {
    return (

        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>


            <ul className="navbar-nav ml-auto">
                {listaIconos.map(function(infoIcon, idx) {
                    return(
                        <NavItem icono = {infoIcon}/>
                    )
                })}
              
                

                <div className="topbar-divider d-none d-sm-block"></div>


                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
                        <img className="img-profile rounded-circle" src="assets/images/dummy-avatar.jpg" width="60" />
                    </a>
                </li>

            </ul>

        </nav>
    );
}
export default Topbar;

