function Actions(props) {
    return (
        <li className="nav-item">
            <a className="nav-link collapsed" href="/">
                <i className={"fas fa-fw " + props.tipoAccion.icon}></i>
                <span>{props.tipoAccion.name}</span>
            </a>
        </li>
    );
}
export default Actions;