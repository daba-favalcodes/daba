import React from "react";
import './cart.css'

const TableData = ({ getProfile }) => {
    return (
        <div className="d-flex flexProfile justify-content-center">
            <div className="tableArea ">
                <div className=" table-responsive bordered-table">
                    <table className="table">

                        <tbody>

                            <tr className="tr">
                                <td className="tableLabel">PHOTO</td>
                                <td>{getProfile.image}</td>
                            </tr>



                            <tr>
                                <td className="tableLabel">NAME</td>
                                <td>{getProfile.name}</td>
                            </tr>


                            <tr>
                                <td className="tableLabel">BIO</td>
                                <td>{getProfile.bio}</td>
                            </tr>

                            <tr>
                                <td className="tableLabel">PHONE</td>
                                <td>{getProfile.phoneNumber}</td>
                            </tr>
                            <tr>
                                <td className="tableLabel">EMAIL</td>
                                <td>{getProfile.email}</td>
                            </tr>
                            <tr>
                                <td className="tableLabel">PASSWORD</td>
                                <td>************</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TableData