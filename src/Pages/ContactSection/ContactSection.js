import React from 'react';

const ContactSection = () => {
    return (
        <div className='w-[95%] mx-auto'>
            <div className='w-full lg:w-[80%] mx-auto'>
                <form className="my-10">
                    <h1 className='text-center text-5xl font-semibold'>Contact Us</h1>
                    <div className='flex gap-2'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Frist Name</span>
                            </label>
                            <input type="text" placeholder="frist name" className="input input-bordered input-primary w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" placeholder="last name" className="input input-bordered input-primary w-full" />
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="number" placeholder="phone" className="input input-bordered input-primary w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered input-primary w-full" />
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Textarea</span>
                        </label>
                        <textarea className="textarea textarea-primary min-h-[200px]" placeholder="message"></textarea>
                    </div>
                    <div className="form-control w-full mt-5">
                        <input type="submit" className='btn btn-primary text-white' value='submit' />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ContactSection;

