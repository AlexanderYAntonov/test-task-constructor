import React from 'react';
import PropTypes from 'prop-types';
import {Stage} from './Stage';

class Flow extends React.Component {
   /* state = { // создали состояние
        flow: this.props.data,
    }*/

 /*   componentWillReceiveProps(nextProps) {
        let nextFilteredNews = [...nextProps.someNews];
        
        nextFilteredNews.forEach((item, index) => {
            if (/pubg/.test(item.bigText.toLowerCase())) {
                item.bigText = 'SPAM';
            }
        });
        this.setState({filteredNews: nextFilteredNews});
        
        console.log({ nextProps })
        console.log({ oldProps: this.props })
    }*/
    
    renderFlow = () => {
        const {data} = this.props;
                
        let flowTemplate = null;

        console.log('Try to render flow ',data.length, data);
        
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
       // const {flow} = this.state;

        return (
            <div>
                {this.renderFlow()}
            </div>
        )
    }


}

Flow.propTypes = {
        //someFlow: PropTypes.array.isRequired
        data: PropTypes.array.isRequired
}
        
export {Flow};