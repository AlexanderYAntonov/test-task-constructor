import React from 'react';
import PropTypes from 'prop-types';
import {Element} from './Element';

class Step extends React.Component {
   /* state = {
        visible: true
    }*/

  /*  handleHideClick = (e) => {
        e.preventDefault();
        this.setState({visible: false});
    }*/

    renderStep = () => {
       const {elements} = this.props.data;

       let stepTemplate = null;

       if (elements.length){
           stepTemplate = elements.map(function(item) {
               return <Element key={item.id} data={item}/>
           } )
        } else {
            stepTemplate = <p>No elements</p>
        }
        return stepTemplate
    }
    
    render (){
        const { title, elements } = this.props.data
        return (
            <div className='step'>
                <p className='step__title'>{title}</p>
                
                {this.renderStep()}
                
            </div>
        )
    }
}

Step.propTypes = {
    data:PropTypes.shape({
        title:PropTypes.string.isRequired,            
        elements:PropTypes.array.isRequired,
        id:PropTypes.number.isRequired
    })
}

export {Step};