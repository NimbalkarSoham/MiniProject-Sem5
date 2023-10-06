import React from 'react'

const CheckoutPage = ({ params }) => {
    const [myOrder, setMyOrder] = useState([]);

    useEffect(() => {
        const fetchOrder = async () => {
            const response = await fetch(`/api/product/${params.id}`, {
                method: 'GET',
            });

            const data = await response.json();

            setMyOrder(data);
            //console.log(myOrder);
        };

        if (params.id) fetchOrder();
    }, [params.id]);

    
  return (
    <div>CheckoutPage</div>
  )
}

export default CheckoutPage