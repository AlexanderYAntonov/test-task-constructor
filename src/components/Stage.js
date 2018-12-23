import React from 'react';
import PropTypes from 'prop-types';
import {Step} from './Step';

//Flow stage, consist of steps and elements
//title - title of stage
class Stage extends React.Component {
    state = {
        visible: true,
        title: this.props.data
    }

    //show or hide stage content
    handleHideClick = (e) => {
        e.preventDefault();
        const newValue = !this.state.visible;
        this.setState({visible: newValue});
    }

    renderStage = () => {
       const {steps} = this.props.data;

       let stageTemplate = null;

       if (steps.length){
           stageTemplate = steps.map(function(item) {
               return <Step key={item.id} data={item}/>
           } )
        } else {
            stageTemplate = <p>No steps</p>
        }
        return stageTemplate
    }
    
    render (){
        const { title } = this.props.data;
        let showSymbol = '+';
        if (this.state.visible) showSymbol = '-';
        return (
            <div className='stage'>
                <div className='stage__plus' onClick={this.handleHideClick}>{showSymbol}</div>
             
                <div className='stage__title'>{title}</div>
                {
                    this.state.visible && this.renderStage()
                }
           
            </div>
        )
    }
}

Stage.propTypes = {
    data:PropTypes.shape({
        title:PropTypes.string.isRequired,            
        steps:PropTypes.array.isRequired,
        id:PropTypes.number.isRequired
    })
}

export {Stage};