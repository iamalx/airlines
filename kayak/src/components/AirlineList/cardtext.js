

function CardText({ airline }) { 
    return (
        <div>
            <div className='airline-name-hover'> {`${airline.name} (${airline.code})`} </div>
            <div>
                <div className='airline-meta'> {airline.alliance !== 'none' && airline.alliance} </div>
                <div className='airline-meta'> {airline.phone} </div>
                <div className='airline-site'> {airline.site} </div>
            </div>
        </div>
    )
}

export default CardText; 