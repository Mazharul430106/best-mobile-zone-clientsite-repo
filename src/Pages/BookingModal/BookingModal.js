import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const BookingModal = ({ modalData }) => {
    // console.log(modalData)
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const handleBookingModalData = (data) => {
        data.name = user.displayName
        data.email = user?.email
        data.itemName = modalData.name
        data.orignalPrice = modalData?.Orignal_Price
        data.reselPrice = modalData.Resel_Price
        data.productImage = modalData.image
        

       fetch(`http://localhost:5000/bookingPhones`,{
            method: 'post',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
       })
       .then(res=> res.json())
       .then(data=> {
            console.log(data);
            if(data.acknowledged){
                toast.success('booking data Successfully added');
            }
       })
       .catch(error=> {
            console.log(error)
       })

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-primary btn-sm btn-circle absolute right-2 top-2 bg-primary text-white">✕</label>
    
                    <form onSubmit={handleSubmit(handleBookingModalData)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name")} value={user?.displayName} readOnly className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">email</span></label>
                        <input type="email" {...register("email")} value={user?.email} readOnly className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Item Name</span></label>
                        <input type="text" {...register("itemName")} value={modalData?.name} readOnly className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Item Image</span></label>
                        <input type="text" {...register("productImage")} value={modalData?.image} readOnly className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Original Price</span></label>
                        <input type="text" {...register("orignalPrice")} value={modalData?.Orignal_Price} readOnly className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Resel Price</span></label>
                        <input type="text" {...register("reselPrice")} value={modalData?.Resel_Price} readOnly className="input input-bordered w-full max-w-xs" />
                    </div>
                        <input className='btn btn-primary text-white w-full mt-4' value="submit" type="submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookingModal;


