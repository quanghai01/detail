import React from 'react';

const PayInfor = () => {
    return (
        <div>
            <h3>Thông tin thanh toán</h3>
            <div className="name-infor">
                <div id="firstname">
                    <label for="firstname_input">First Name</label>
                    <input type="text" id="firstname_input" />
                </div>
                <div id="lastname">
                    <label for="lastname_input">Last Name</label>
                    <input type="text" id="lastname_input" />
                </div>
            </div>
        </div>
    );
};

export default PayInfor;