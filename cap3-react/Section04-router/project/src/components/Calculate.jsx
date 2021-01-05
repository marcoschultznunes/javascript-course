import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Calculate = (props) => {
    const [n1, setN1] = useState(1)
    const [n2, setN2] = useState(1)
    const [op, setOp] = useState('+')
    const [opInput, setOpInput] = useState('sum')
    const [res, setRes] = useState(2)

    useEffect(() => {
        const params = new URLSearchParams(props.location.search)
        setN1(params.get('n1'))
        setN2(params.get('n2'))

        switch(params.get('op')){
            case 'sum': setOp('+')
            break
            case 'sub': setOp('-')
            break
            case 'mult': setOp('*')
            break
            case 'div': setOp('/')
            break
            default: setOp('+')
        }


    }, [props])

    useEffect(() => {
        switch(op){
            case '+': setRes(Number(n1) + Number(n2))
            break
            case '-': setRes(Number(n1) - Number(n2))
            break
            case '*': setRes(Number(n1) * Number(n2))
            break
            case '/': setRes(Number(n1) / Number(n2))
            break
            default: setRes(Number(n1) + Number(n2))
        }
    }, [op])

    const optionSelectHandler = (e) => {
        setOpInput(e.target.value)
    }
    const n1Handler = (e) => {
        setN1(e.target.value)
    }
    const n2Handler = (e) => {
        setN2(e.target.value)
    }

    return (  
        <div>
            <h1>Calculate</h1>
            <h3>{n1} {op} {n2} = {res}</h3>
            <input type="number" value={n1} onChange={n1Handler} />
            <input type="number" value={n2} onChange={n2Handler}/>
            <select onChange={optionSelectHandler}>
                <option value="sum">+</option>
                <option value="sub">-</option>
                <option value="mult">*</option>
                <option value="div">/</option>
            </select>
            <Link to={'/calculate/?n1=' + n1 + '&n2=' + n2 + '&op=' + opInput}>Calculate</Link>
        </div>
    );
}
 
export default Calculate;
