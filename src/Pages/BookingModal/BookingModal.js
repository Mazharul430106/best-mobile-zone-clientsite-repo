import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const BookingModal = ({modalData}) => { 
    const {user} = useContext(AuthContext);

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle"/>
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-primary btn-sm btn-circle absolute right-2 top-2 bg-primary text-white">✕</label>
                    <form>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name='userName' placeholder="name" defaultValue={user?.displayName} disabled  className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" defaultValue={user?.email} disabled className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Item</span>
                            </label>
                            <input type="text" name='itemName' placeholder="name" defaultValue={modalData?.name} disabled className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Orginal Price</span>
                            </label>
                            <input type="text" name='orignalPrice' placeholder="price" defaultValue={modalData?.Orignal_Price} disabled className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Resel Price</span>
                            </label>
                            <input type="text" name='reselPrice' placeholder="price" defaultValue={modalData?.Resel_Price} disabled className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full mt-6 mb-2">
                            <label type="submit" className="btn btn-primary text-white w-full">Submit</label>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default BookingModal;


