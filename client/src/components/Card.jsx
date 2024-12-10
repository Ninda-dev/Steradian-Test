import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Card({ product }) {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl mb-10">
                <figure>
                    <img
                        className="h-96"
                        src={product.image}
                        alt={product.name}/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product.name}
                        <div className="badge">NEW</div>
                    </h2>
                    <p>Month Rate : {product.month_rate}</p>
                    <p>Day Rate : {product.day_rate}</p>
                    <div className="button-container card-actions justify-end">
                        <div className="button claim badge badge-outline bg-[#560F20] text-white hover:animate-pulse">
                            <Link to={`/cms`}>
                                Rental
                            </Link>
                        </div>
                        <div className="button detail badge badge-outline hover:bg-[#560F20] hover:text-white">
                            <Link to="#">
                                Detail
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

Card.propTypes = {
    product: PropTypes.exact({
        name: PropTypes.string,
        image: PropTypes.string,
        month_rate: PropTypes.number,
        day_rate: PropTypes.number,
        id: PropTypes.string,
    })
};