import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Card from "../components/Card";
import { fetchProducts } from "../features/productSlice";

export default function Home() {

    const { data } = useSelector((state) => state.product);
    // console.log(data, "=======ini state");

    const dispatch = useDispatch()

    useEffect(() => {
        // console.log('======masuk useEffect');

        dispatch(fetchProducts())
    }, []);

    // console.log(answerPrompt, "-=-----ansprom");


    return (
        <>
            <div className="bg-gray-400 p-4 rounded-lg shadow-md">
            <h1 className="text-4xl text-bold text-black mb-6 text-center">RENTAL CARS</h1>
                {!data
                    ?
                    <div className="justify-items-center">
                        <span className="loading loading-dots loading-md items-center"></span>
                        <p>Cars Not Available</p>
                    </div>
                    :

                    <div className="grid grid-cols-2 gap-8">
                        {/* <div className="grid"> */}

                        {data.map((product) => {
                            return (
                                <Card
                                    key={product.id}
                                    product={{
                                        id: product.id,
                                        name: product.name,
                                        month_rate: product.month_rate,
                                        day_rate: product.day_rate,
                                        image: product.image
                                    }}
                                />
                            )
                        })}

                        {/* </div> */}
                    </div>
                }
            </div>
        </>
    )
}