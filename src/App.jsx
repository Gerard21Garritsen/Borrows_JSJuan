//This is a React Module
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Slider_button from "./components/Buttons";
import { calc_interest, currency_format } from "./helpers";

function App()
{
    const [bar_money, setBar_money] = useState(10000); //set bar_money 1000
    const [months, setMonths] = useState(6); //set months to 6 by default 
    const [amount, setAmount] = useState(0); //set amount of pay to zero by default
    const [total_pay, setTotal_pay] = useState(0); //set total of amount of pay to zero

    //declare three constatn variables
    const MIN = 0;
    const MAX = 20000;
    const STP = 100;

    //add a useEffect to update amount of pay
    useEffect(() =>
    {
        setAmount(calc_interest(bar_money, months));

    }, [bar_money, months]);

    //useEffect to update the total amount of pay
    useEffect(() =>
    {
        setTotal_pay(amount/months);

    }, [amount]);

    
    function handleChange(e)
    {
       setBar_money(parseInt(e.target.value));

    }

    function handleButtonMinus(e)
    {
        if(bar_money > MIN)
            setBar_money(bar_money - STP);

    }

    function handleButtonAdd(e)
    {
        if(bar_money < MAX)
            setBar_money(bar_money + STP);

    }


    return (
        <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
            
            <Header />

            <div className="flex justify-between my-6">
                <Slider_button 
                character={'-'}
                btn_func={handleButtonMinus}
                />

                <Slider_button
                character={'+'}
                btn_func={handleButtonAdd}
                />
            
            </div>

            <input type="range" className="w-full bg-gray-200 accent-lime-500 
            hover:accent-lime-600"
            onChange={handleChange}
            min={MIN}
            max={MAX}
            step={STP}
            value={bar_money}
            />

            <p className="text-center my-10 text-5xl font-extrabold text-indigo-600
            ">{currency_format(bar_money)} USD</p>

            <h2 className="text-2xl font-extrabold text-gray-500 text-center">
                Elige un <span className="text-indigo-600">Plazo</span> a pagar

            </h2>

            <select className="mt-5 w-full p-2 bg-white border
                border-gray-300 rounded-lg text-center text-xl font-bold
                text-gray-500"
                value={months}
                onChange={e => setMonths(parseInt(e.target.value))}
            >
                <option value="6">6 Meses</option>
                <option value="12">12 Meses</option>
                <option value="24">24 Meses</option>

            </select>

            <div className="my-5 space-y-3 bg-gray-50 p-5">
                <h2 className="text-2xl font-extrabold text-gray-500 text-center">
                    Resumen de <span className="text-indigo-600">pagos</span>
                </h2>

                <p className="text-xl text-gray-500 font-bold
                text-center">{months} Meses</p>
                <p className="text-xl text-gray-500 font-bold
                text-center">{currency_format(amount)} Total a pagar</p>
                <p className="text-xl text-gray-500 font-bold
                text-center">{currency_format(total_pay)} Mensuales</p>

            </div>

        </div> 
    );
}

export default App;