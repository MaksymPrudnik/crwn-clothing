import './MenuItem.styles.scss'

export const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`menu-item ${size}`}>
        <div 
            className='background-image' 
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className='content'>
                <h2 className='title'>{ title.toUpperCase() }</h2>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    </div>
)