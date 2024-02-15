import React,{useState} from "react";

const Dragdrop = () => {
    return (
        <>
            <div className="dragdrop">
                <div className="container">
                    <div className="mydrag">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="myHead">
                                    <h1>Swap the box</h1>
                                    <form>
                                        <div className="myboxinput">
                                            <input type="text" className="form-control" />
                                            <button type="button">Add</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="boxsides">
                                    <div className="boxess">
                                        Rabsha Shakeel 
                                        <a href="#">>></a>
                                    </div>
                                    <div className="boxess">
                                        Aazan Pathan 
                                        <a href="#">>></a>
                                    </div>
                                    <div className="boxess">
                                        Samad Khalid 
                                        <a href="#">>></a>
                                    </div>
                                    <div className="boxess">
                                        Osama Nadeem 
                                        <a href="#">>></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="boxsides">
                                    <div className="boxess">
                                        <a href="#">>></a>
                                        Osama Nadeem 
                                    </div>
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