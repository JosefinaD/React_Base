function NavItem(props) {
    return (
        <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="/" id={props.icono.identif}>
                <i className={"fas " + props.icono.icon + " fa-fw"}></i>

                <span className="badge badge-danger badge-counter">{props.icono.notification}</span>
            </a>
        </li>
    );
}
export default NavItem;