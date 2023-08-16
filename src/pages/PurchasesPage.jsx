import { useEffect } from "react"
import usePurchases from "../hooks/usePurchases"
import ProductPurchased from "../components/PurchasesPage/ProductPurchased"
import './styles/PurchasesPage.css'

const PurchasesPage = () => {

   const { getAllPurchases, purchases } = usePurchases()

   useEffect(()=> { 
    getAllPurchases()
   },[])
   console.log(purchases)

  return (
    <section>
      <h2>My Purchases</h2>
      <div className="purchases__container">
        {
            purchases?.map(purch => (
                <ProductPurchased 
                key={purch.id}
                purchase={purch}
                />
            ))
        }
      </div>
    </section>
  )
}

export default PurchasesPage
