import React from "react";


function Contact (){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center w-full space-y-8">
                <div className="flex flex-col items-center justify-center w-full space-y-2">
                    <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
                    <p className="text-lg text-gray-500">We are here to help you</p>
                </div>
                <div className="flex flex-col items-center justify-center w-full space-y-2">
                    <div className="flex flex-col items-center justify-center w-full space-y-2">
                        <h2 className="text-2xl font-bold text-gray-900">Email</h2>
                        <p className="text-lg text-gray-500">
                            <a href="mailto:
                            ">Email Us</a>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full space-y-2">
                        <h2 className="text-2xl font-bold text-gray-900">Phone</h2>
                        <p className="text-lg text-gray-500">
                            <a href="tel:">Call Us</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Contact;