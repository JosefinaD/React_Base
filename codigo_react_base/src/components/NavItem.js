function NavItem(props) {
    return (
        <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                <i className={"fas " + props.icon + " fa-fw"}></i>

                <span className="badge badge-danger badge-counter">{props.notification}</span>
            </a>
        </li>
    );
}
export default NavItem;