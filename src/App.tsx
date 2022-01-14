import provinceJson from "./datas/province.json";
import ProductPlan from './components/ProductPlan';
import Province from './utils/province';

const App = () => {
  const province = new Province(provinceJson[0]);
  console.log(province);
  return (
    <>      
      <ProductPlan province={province} />
    </>
  );
};

export default App;