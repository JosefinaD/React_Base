import Actions from './Actions';
function Sidebar() {
	return (
		<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<i className="fas fa-chart-line"></i>
				</div>
				<div className="sidebar-brand-text mx-3">Admin</div>
			</a>
			<hr className="sidebar-divider my-0" />
			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard</span></a>
			</li>
			<hr className="sidebar-divider" />
			<div className="sidebar-heading">Actions</div>
			<Actions name="Pages" icon="fa-folder"/>
			<Actions name="Charts" icon="fa-chart-area"/>
			<Actions name="Tables" icon="fa-table"/>

			<hr className="sidebar-divider d-none d-md-block" />
		</ul>

	);
}
export default Sidebar;