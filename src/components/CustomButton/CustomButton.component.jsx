import './CustomButton.styles.scss'

export const CustomButton = ({ children, ...otherProps }) => (
    <button
        className='custom-button'
        {...otherProps}
    > {children} </button>
)