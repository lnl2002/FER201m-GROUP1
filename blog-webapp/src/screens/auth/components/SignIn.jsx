import React from 'react'

export const SignIn = ({openSignUp}) => {
    const handleOpenSignUp = () => {
        openSignUp()
    }

    return (
        <div className="row w-100 bg-white rounded m-0">
            <img style={{maxHeight: "70vh"}} className='col-md-6 p-0 h-100 rounded' src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

            <div className="px-6 py-8 col-md-6 h-100">

                <p className="m-3 fs-5 fw-medium text-center text-secondary">
                    Welcome back!
                </p>

                <h3 className='mx-3 text-center'>Login with Email</h3>

                <div className="mx-3 mb-3 row">
                    <label for="email" className="fw-medium form-label">Email</label>
                    <input type='email' className="form-control" id="email" placeholder="example@mail.com" />
                </div>

                <div className="mb-3 mx-3  row">
                    <label for="password" className="fw-medium form-label">Password</label>
                    <input type='password' className="form-control" id="password" placeholder="Enter password..." />
                </div>

                <div className="my-4 mx-3 d-flex justify-content-center">
                    <button className="btn btn-warning">
                        Sign In
                    </button>
                </div>

                <div className="d-flex justify-content-center">
                    <p>Don't have an account,<strong onClick={handleOpenSignUp} className="text-warning">sign up</strong></p>
                </div>
            </div>
        </div>
    )
}
