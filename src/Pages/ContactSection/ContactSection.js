import React from 'react';

const ContactSection = () => {
    return (
        <div className='px-[7%]'>
            <div className='w-full '>
                <form className="my-10">
                    <h1 className='text-center text-5xl font-semibold'>Contact Us</h1>
                    <div className='grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-2'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Frist Name</span>
                            </label>
                            <input type="text" placeholder="frist name" className="input input-bordered input-primary rounded  w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" placeholder="last name" className="input input-bordered input-primary rounded w-full" />
                        </div>
                    </div>
                    <div className='grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-2'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="number" placeholder="phone" className="input input-bordered input-primary rounded w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered input-primary rounded w-full" />
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Textarea</span>
                        </label>
                        <textarea className="textarea textarea-primary rounded min-h-[250px]" placeholder="message"></textarea>
                    </div>
                    <div className="form-control w-full mt-5">
                        <input type="submit" className='btn btn-primary rounded text-white' value='submit' />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ContactSection;

