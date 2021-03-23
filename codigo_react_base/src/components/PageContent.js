import Categories from './Categories';
import Cards from './Cards';

function PageContent() {
	return (
		<div className="container-fluid">
			{/* <!-- Page Heading -->*/}
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>

			<div className="row">
				<Cards title="Productos in Data Base" number="135" icon="fa-clipboard-list" color="primary" />
				<Cards />
				<Cards />
			</div>

			<div className="row">
				{/* *<!-- Last Product in DB -->*/}
				<div className="col-lg-6 mb-4">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
						</div>
						<div className="card-body">
							<div className="text-center">
								<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 25 + "rem" }} src="assets/images/product_dummy.svg" alt="dummy" />
							</div>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
							<a target="_blank" rel="nofollow" href="/">View product detail</a>
						</div>
					</div>
				</div>

				{/* <!-- Categories in DB --> */}
				<div className="col-lg-6 mb-4">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
						</div>
						<div className="card-body">
							<div className="row">
								<Categories />
								<Categories />
								<Categories />
								<Categories />
								<Categories />
								<Categories />

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default PageContent;