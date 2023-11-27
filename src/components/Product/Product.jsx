import "./_product.scss"
import { FaStar, FaArrowsAlt } from "react-icons/fa"

import s from "../../assets/img/shop/shop-1.jpg"
import s_2 from "../../assets/img/shop/shop-2.jpg"
import s_3 from "../../assets/img/shop/shop-3.jpg"
import s_4 from "../../assets/img/shop/shop-4.jpg"
import s_5 from "../../assets/img/shop/shop-5.jpg"
import s_6 from "../../assets/img/shop/shop-6.jpg"
const products = [s, s_2, s_3, s_4, s_5]

const Product = () => (
  <div className="row">
    {products.map((item, index) => (
      <div className="col-lg-3 col-md-6">
        <div className="product__item">
          <div className="product__item__pic">
            <img className="product__item__pic" src={item} />
            <ul className="product__hover">
              <li>
                <a href={item}>
                  {/* <span className="fa fa-arrows-alt" /> */}
                  <FaArrowsAlt className="span1" width={32} />
                </a>
              </li>
            </ul>
          </div>
          <div className="product__item__text">
            <h6>
              <a href="#">Furry Hooded</a>
            </h6>
            <div className="rating">
              <FaStar width={32} color="green" />
              <FaStar width={32} color="green" />
              <FaStar width={32} color="green" />
              <FaStar width={32} color="green" />
              <FaStar width={32} color="black" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <div className="product__price">$590.0</div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default Product
