import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const ContactSection = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_wm5jpf2', 'template_p9fjd89', form.current, 'o5E_e7JTnVh9xiC31')
            .then((result) => {
                console.log(result);
                toast.success('Your Information Submit Successfully')
            }, (error) => {
                console.log(error);
            });
        e.target.reset();

    }

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
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Frist Name</span>
                                </label>
                                <input type="text" name='fristName' placeholder="frist name" className="input input-bordered focus:outline-none  input-primary rounded-full  w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" name='lastName' placeholder="last name" className="input input-bordered focus:outline-none  input-primary rounded-full w-full" required/>
                            </div>
                        </div>
                        <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number" name='phoneNumber' placeholder="phone number" className="input input-bordered focus:outline-none  input-primary rounded-full w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered focus:outline-none input-primary rounded-full w-full" required/>
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Textarea</span>
                            </label>
                            <textarea type='text' name='message' className="textarea textarea-primary focus:outline-none rounded-lg xl:min-h-[200px] min-h-[180px]" placeholder="message" required/>
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

