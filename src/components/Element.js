import React from 'react';
import PropTypes from 'prop-types';

class Element extends React.Component {
   /* state = {
        visible: true
    }*/

  /*  handleHideClick = (e) => {
        e.preventDefault();
        this.setState({visible: false});
    }*/

  /*  renderStep = () => {
       const {elements} = this.props;

       let stepTemplate = null;

       if (elements.length){
           stepTemplate = elements.map(function(item) {
               return <Element key={item.id} data={item}/>
           } )
        } else {
            stepTemplate = <p>No elements</p>
        }
        return stepTemplate
    }*/
    
    render (){
        const { title, responsible, time } = this.props.data
        return (
            <div className='element'>
                <div className='element__title'>{title}</div>
                <div className='element__responsible'>{responsible}</div>
                <div className='element__time'>{time}</div>                
            </div>
        )
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