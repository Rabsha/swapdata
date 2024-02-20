import React,{useState} from "react";

const Dragdrop = () => {

    const [swapinput, setInput] = useState('');
    const [adddata, setData] = useState([]);
    const [newdata, setSwapData] = useState([]);

    const HandleInput = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    const HandleSubmit = () => {
        if (swapinput.trim() != '') 
        {
            setData([...adddata, swapinput]);
            setInput('');
        }
        else{
            alert("Please Add Some Value");
        }
    }

    const HandleSwap = (index) => 
    {
        const itemToRemove = adddata[index];
        setSwapData([...newdata, itemToRemove]);

        const adddataCopy = adddata.filter((item, i) => i !== index);
        setData(adddataCopy);
    }

    const HandleRevertSwap = (indexes) =>
    {
        const itemsRemove = newdata[indexes];
        setData([...adddata, itemsRemove]);

        const revertData = newdata.filter((items, ii) => ii !== indexes);
        setSwapData(revertData);
    }

    return (
        <>
            <div className="dragdrop">
                <div className="container">
                    <div className="mydrag">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="myHead">
                                    <h1>Swap the Data</h1>
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <div className="myboxinput">
                                            <input type="text" className="form-control" value={swapinput} onChange={HandleInput} />
                                            <button type="button" onClick={HandleSubmit}>Add</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="boxsides">
                                    {adddata.map((results,index) => (
                                        <div className="boxess" key={index}>
                                            {results}
                                            <a href="#" onClick={() => HandleSwap(index)}>>></a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="boxsides">
                                    {newdata.map((value, num) => (
                                        <div className="boxess" key={num}>
                                            {value}
                                            <a href="#" className="myround" onClick={() => HandleRevertSwap(num)}>>></a>
                                        </div> 
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dragdrop