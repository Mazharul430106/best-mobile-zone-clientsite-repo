import React from 'react';

const ContactSection = () => {
    return (
        <div className='px-[7%]'>
            <div>
                <h1 className='text-center text-5xl font-semibold'>Contact Us</h1>
            </div>
            <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-10 my-10 mb-20'>
                <div className='border'>
                    <iframe className='w-full lg:h-full md:min-h-[350px] h-[250px] ' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d926884.5496945316!2d89.78112119817654!3d24.841887276705496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1681492262637!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className='w-full'>
                    <form className="">
                        <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Frist Name</span>
                                </label>
                                <input type="text" placeholder="frist name" className="input input-bordered focus:outline-none  input-primary rounded-full  w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" placeholder="last name" className="input input-bordered focus:outline-none  input-primary rounded-full w-full" />
                            </div>
                        </div>
                        <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number" placeholder="phone" className="input input-bordered focus:outline-none  input-primary rounded-full w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered focus:outline-none  input-primary rounded-full w-full" />
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Textarea</span>
                            </label>
                            <textarea className="textarea textarea-primary focus:outline-none rounded-lg xl:min-h-[200px] min-h-[180px]" placeholder="message"></textarea>
                        </div>
                        <div className="form-control w-full mt-5">
                            <input type="submit" className='btn btn-primary rounded-full text-white' value='submit' />
                        </div>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default ContactSection;

