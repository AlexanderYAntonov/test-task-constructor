import React from 'react';
import PropTypes from 'prop-types';

//Flow element with title, time and responsible person
class Element extends React.Component {
       
    render (){
        const { title, responsible, time } = this.props.data;
        return (
            <div className='element'>
                <div className='element__title'>{title}</div>
                <div className='element__responsible'>{responsible}</div>
                <div className='element__time'>{time}</div>                
            </div>
        );
    }
}

Element.propTypes = {
    data:PropTypes.shape({
        title:PropTypes.string.isRequired,
        responsible:PropTypes.string.isRequired,
        time:PropTypes.string.isRequired,
        id:PropTypes.number.isRequired
    })
}

export {Element};