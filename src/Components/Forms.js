import React from 'react'

export default function Forms() {
    return (
        <>
            <div className="container formview">
                <h1>Fill the Forms</h1>

                <div className="field form-input ">
                    <p className="control ">
                        <input className="input" type="text" placeholder="First Name" readonly />
                    </p>
                    <p className="control ">
                        <input className="input" type="text" placeholder=" Last Name" readonly />
                    </p>
                    <p className="control ">
                        <input className="input" type="email" placeholder="Email" readonly />
                    </p>
                    <p className="control ">
                        <input style={{color:'white'}} className="input" type="number" placeholder="Phone Number" readonly />
                    </p>
                    <p className="control ">
                        <input  className="input" type="file" placeholder="Choose File"/>
                    </p>
                    <p className="control ">
                    </p>
                    <button style={{color:'black',padding:'2px 3rem',textAlgin:'center',fontSize:'2rem'}} >Submit</button>


                   
                </div>
            </div>

        </>
    )
}
