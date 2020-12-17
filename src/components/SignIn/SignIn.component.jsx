import { Component } from 'react'
import { FormInput } from '../FormInput/FormInput.component'

import './SignIn.styles.scss'

class SignIn extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        const { email, password } = this.state
        const { handleChange, handleSubmit } = this
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit} >
                    <FormInput
                        id='email'
                        name='email'
                        type='email'
                        value={email}
                        handleChange={handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        id='password'
                        name='password'
                        type='password'
                        value={password}
                        handleChange={handleChange}
                        label='Password'
                        required
                    />

                    <input type="submit" value='Submit form' />
                </form>
            </div>
        )
    }
}

export default SignIn