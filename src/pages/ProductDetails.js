import { useParams } from "react-router-dom";

function ProductDetails(){

const {id}=useParams();
return<p>productId:{id}</p>


}
export default ProductDetails;