import {Route, Routes} from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import {CategoriesProvider} from "../../contexts/categories.context";
import {useEffect} from "react";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {useDispatch} from "react-redux";
import {setCategoriesMap} from "../../store/categories/category.action";

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
            const getCategoriesMap = async () => {
                const catergoryMap = await getCategoriesAndDocuments('categories')
                dispatch(setCategoriesMap(catergoryMap))
            }
            getCategoriesMap()
        },
        [dispatch]
    )

    return (
        <CategoriesProvider>
            <Routes>
                <Route index element={<CategoriesPreview/>}/>
                <Route path={':category'} element={<Category/>}/>
            </Routes>
        </CategoriesProvider>
    );
};

export default Shop;
