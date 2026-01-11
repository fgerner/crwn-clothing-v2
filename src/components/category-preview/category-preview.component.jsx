import './category-preview.styles.scss'
import ProductCard from "../product-card/product-card.component";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/categories/category.selector";

const CategoryPreview = ({title, products}) => {
    const categoriesMap = useSelector(selectCategoriesMap)

    return <div className='category-preview-container'>
        <h2>
            <Link to={title} className={'title'}>{title.toUpperCase()}</Link>
        </h2>
        <div className="preview">
            {products.filter((_, index) => index < 4).map((product) => (
                <ProductCard key={product.id} product={product}/>
            )
            )}
        </div>
    </div>

}


export default CategoryPreview