import '../App.css';
import { viewItem } from '../firebaseConfig';
import { useEffect } from 'react';
import '../css/style.css';
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {
    const location = useLocation()
    const detailsData = location?.state?.data

    // Google Analytics 
    useEffect(() => {
        viewItem(detailsData)
    }, [detailsData])

    return (
        <div className='container'>
            <h1 className='text-center mt-2'>{detailsData?.title}</h1>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-md-6 mt-4'>
                        <img src={detailsData?.image} className="card-img img-fluid" width="96" height="350" alt="" />
                        <div className='text-center'>
                            <button type='button' className='btn btn-success'>Buy Now</button>
                        </div>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h5>Laptops & Notebooks</h5>

                        <h3 className="mb-0 font-weight-semibold">{detailsData.price}</h3>

                        <div>
                            <i className="fa fa-star star"></i>
                            <i className="fa fa-star star"></i>
                            <i className="fa fa-star star"></i>
                            <i className="fa fa-star star"></i>
                        </div>

                        <div className="mb-3">34 reviews</div>
                        <div className=''>
                            <h6>Key Features</h6>
                            <ul>
                                <li>Intel® Core ™ i5-1135G7</li>
                                <li>Quad Core Processor (2.4GHz upto 4.2GHz 8MB Cache)</li>
                                <li>16GB DDR4 3200 MHz</li>
                                <li>512GB SSD M.2 PCIe NVMe</li>
                            </ul>
                        </div>

                        <div className=''>
                            <h6>Specifications</h6>
                            <ul>
                                <li>Weight: 1.49kg</li>
                                <li>Country of Origin: India</li>
                                <li>Model Name: Dynabook Satellite Pro C40 J</li>
                                <li>Screen Size: 14 inch - 14.9 inch</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails