function Actions(props) {
    return (
        <li className="nav-item">
            <a className="nav-link collapsed" href="/">
                <i className={"fas fa-fw " + props.icon}></i>
                <span>{props.name}</span>
            </a>
        </li>
    );
}
export default Actions;