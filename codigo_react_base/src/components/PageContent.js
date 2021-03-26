import Categories from './Categories';
import Cards from './Cards';
import NavItem from './NavItem';

const listaTarjetas = [
	{title:"Productos in Data Base", number:"135", icon:"fa-clipboard-list", color:"primary"},
	{title:"Amount in products", number:"$546.456", icon:"fa-dollar-sign", color:"success"},
	{title:"Users quantity", number:"38", icon:"fa-user-check", color:"warning"}
]
const listaCategorias = [

	{category:"Category 01"},{category:"Category 02"},{category:"Category 03"},{category:"Category 04"},
	{category:"Category 05"},{category:"Category 06"}
]
function PageContent() {
	return (
		<div className="container-fluid">
			{/* <!-- Page Heading -->*/}
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>

			<div className="row">
				{listaTarjetas.map(function(item, idx) {
					return(
						<Cards tarjeta = {item} />
					)
				})
			}	
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
							{listaCategorias.map(function(cat, idx) {
								return(
									<Categories group={cat}/>
								)
				})
			}	

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default PageContent;