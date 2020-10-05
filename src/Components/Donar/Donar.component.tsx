import React, { useState } from 'react';

import axios from 'axios';

const Donar: React.FC<any> = (props: any) => {
    let textInput: any = null;
    const initialData: any = {
        amount: '',
        customerEmail: '',
        customerPhone: '',
        customerName: ''
    }

    const dataInit: any = {
        params: '',
        checksum: '',
        txnUrl: ''
    }

    const [donationDetails, setDonationDetails] = useState(initialData);
    const [res, setRes] = useState(dataInit);
    const [foundPayForm, setFoundPayForm] = useState(false);

    const inputHandler = (e: any, name: string) => {
        let data = { ...donationDetails };

        data[name] = e.target.value;

        setDonationDetails(data);
    }

    const customRow = {
        marginBottom: '10px'
    }

    const donateNow = (e: any) => {
        console.log(donationDetails);
        axios.post('http://localhost:9000/api/paynow', donationDetails).then( res => {
            setRes(res.data);
        });
    }

    const submitPaymentReq = () => {
        setTimeout( () => {
            if(!foundPayForm) {
                const formPay: any = document.getElementById('f1');
                if(formPay) {
                    setFoundPayForm(true);
                    formPay && formPay.submit();
                } else {
                    submitPaymentReq();
                }
            }
        }, 2000)
    }

    return (
        <div className="row" ref={(input) => { textInput = input; }}>
            {
                !res.txnUrl &&
                <div className="col-12">
                <form>
                    <div className="row" style={customRow}>
                        <div className="col-lg-6 col-md-6 col-12">
                            <input
                                type="text"
                                value={donationDetails.customerName}
                                className="form-control"
                                placeholder="Enter your name"
                                onChange={(event) => inputHandler(event, 'customerName')}
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <input
                                type="text"
                                value={donationDetails.customerEmail}
                                className="form-control"
                                placeholder="Enter your email"
                                onChange={(event) => inputHandler(event, 'customerEmail')}
                            />
                        </div>
                    </div>
                    <div className="row" style={customRow}>
                        <div className="col-lg-6 col-md-6 col-12">
                            <input
                                type="text"
                                value={donationDetails.customerPhone}
                                className="form-control"
                                placeholder="Enter your mobile"
                                onChange={(event) => inputHandler(event, 'customerPhone')}
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <input
                                type="text"
                                value={donationDetails.amount}
                                className="form-control"
                                placeholder="Enter donation amount"
                                onChange={(event) => inputHandler(event, 'amount')}
                            />
                        </div>
                    </div>
                    <h5 className="text-center">
                        <button className="btn btn-info" type="button" onClick={(event) => donateNow(event)}>Donate Now</button>
                    </h5>
                </form>
            </div>
            }
            {
                res.txnUrl &&
                <form
                    method="post"
                    action={res.txnUrl}
                    id="f1"
                >
                    <div className="row">
                        <div className="col-12">
                            <h4 className="text-center">
                                Please do not refresh this page...
                            </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <input
                                type="hidden"
                                name="MID"
                                value={res.params.MID}
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="hidden"
                                name="CHECKSUMHASH"
                                value={res.checksum}
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="hidden"
                                name="WEBSITE"
                                value={res.params.WEBSITE}
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="hidden"
                                name="TXN_AMOUNT"
                                value={res.params.TXN_AMOUNT}
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="hidden"
                                name="ORDER_ID"
                                value={res.params.ORDER_ID}
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="hidden"
                                name="MOBILE_NO"
                                value={res.params.MOBILE_NO}
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="hidden"
                                name="INDUSTRY_TYPE_ID"
                                value={res.params.INDUSTRY_TYPE_ID}
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="hidden"
                                name="EMAIL"
                                value={res.params.EMAIL}
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="hidden"
                                name="CUST_ID"
                                value={res.params.CUST_ID}
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="hidden"
                                name="CHANNEL_ID"
                                value={res.params.CHANNEL_ID}
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="hidden"
                                name="CALLBACK_URL"
                                value={res.params.CALLBACK_URL}
                            />
                        </div>
                    </div>
                {submitPaymentReq()}
                </form>
            }
        </div>
    )
}

export default Donar;