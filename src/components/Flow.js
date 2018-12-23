import React from 'react';
import PropTypes from 'prop-types';
import {Stage} from './Stage';

class Flow extends React.Component {
       
    renderFlow = () => {
        const {data} = this.props;
                
        let flowTemplate = null;

        if (data.length){
           flowTemplate = data.map(function(item) {
               return <Stage key={item.id} data={item}/>
           } )
        } else {
            flowTemplate = <p>No flow</p>
        }
        return flowTemplate
    }

    render (){
       
        return (
            <div>
                {this.renderFlow()}
            </div>
        )
    }


}

Flow.propTypes = {
    data: PropTypes.array.isRequired
}
        
export {Flow};