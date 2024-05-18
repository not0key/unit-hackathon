import { FilterProducts, ListProducts } from "@/components";

const CatalogProducts = () => {
  return(
    <div style={{color:'#FFFFFF'}}>
      <h1 style={{textAlign: "center", fontSize: "24px", fontWeight: 600}}>Каталог</h1>
      <FilterProducts />
      <ListProducts />
    </div>
  )
}

export default CatalogProducts
