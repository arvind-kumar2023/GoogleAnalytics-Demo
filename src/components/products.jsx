import '../App.css';
import { analyticsEvent, addToCard } from '../firebaseConfig';
import { useEffect } from 'react';
import { productList } from '../helpers/dummy'
import '../css/style.css';
import { successAlert } from '../utils/alert';
import { Link } from 'react-router-dom';

const ProductsList = () => {
    // Google Analytics 
    useEffect(() => {
        analyticsEvent("products")
    }, [])

    const addToCardHandle = (item) => {
        successAlert("Item Add Successfully.")
        addToCard(item)
    }

    return (
        <div className='container'>
            <h1 className='text-center mt-2'>Products List</h1>

            <div className="container d-flex justify-content-center mt-50 mb-50">
                <div className="row">
                    {productList.map((product) => (
                        <div key={product.id} className="col-md-4 mt-2">
                            <div className="card">
                                <div className="card-body">
                                    <Link to={{pathname:'/product-details'}} state={{ data: product }}>
                                    <div className="card-img-actions">
                                        <img src={product.image} className="card-img img-fluid" width="96" height="350" alt="" />
                                    </div>
                                    </Link>
                                </div>

                                <div className="card-body bg-light text-center">
                                    <div className="mb-2">
                                        <h6 className="font-weight-semibold mb-2">
                                            <h6 className="text-default mb-2" data-abc="true">{product.title}</h6>
                                        </h6>

                                        <h6 href="#" className="text-muted" data-abc="true">Laptops & Notebooks</h6>
                                    </div>

                                    <h3 className="mb-0 font-weight-semibold">{product.price}</h3>

                                    <div>
                                        <i className="fa fa-star star"></i>
                                        <i className="fa fa-star star"></i>
                                        <i className="fa fa-star star"></i>
                                        <i className="fa fa-star star"></i>
                                    </div>

                                    <div className="text-muted mb-3">34 reviews</div>

                                    <button type="button" className="btn btn-success" onClick={()=>addToCardHandle(product)}><i className="fa fa-cart-plus mr-2"></i> Add to cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductsList