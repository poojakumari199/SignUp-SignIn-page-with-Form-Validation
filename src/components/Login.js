import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img'
import { useNavigate } from 'react-router'


const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);

    const getdata = (e) => {
        // console.log(e.target.value);

        const { value, name } = e.target;
        console.log(value, name)

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("userData");
        console.log(getuserArr)

        const { email, password } = inpval;

        if (email === "") {
            alert("email field is required")
        }
        else if (!email.includes("@")) {
            alert("please enter valid email")
        } else if (password === "") {
            alert("password is required")
        } else if (password < 5) {
            alert("password length greater than five")
        } else {
            console.log("data added successfully")
            // localStorage.setItem("userData", JSON.stringify([...data, inpval]));
        if(getuserArr && getuserArr.length){
            const userdata = JSON.parse(getuserArr);
            console.log(userdata);
            const userlogin = userdata.filter((el,k) =>{
                return el.email === email && el.password === password
            });

            if(userlogin.length === 0)
            alert("invalid details")
            else 
            console.log("user logged in successfully");

            localStorage.setItem("user_login",JSON.stringify(getuserArr))

            history("/details")
        }
        }

    }

    return (
        <div>
            <div className="container mt-3">
                <section className="d-flex justify-content-between">
                    <div className="left_data p-3" style={{ width: "100%" }}>
                        <h3 className="text-center col-lg-6">Sign In</h3>

                        <Form>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" onClick={addData} className="col-lg-6" style={{ background: "rgb(67, 185,127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>

                    </div>
                    <Sign_img />
                </section>
            </div>
        </div>
    )
}

export default Login
