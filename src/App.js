import React from 'react';
import './App.css';
import {Flow} from './components/Flow';
import myFlow from './data/flowData' ;

class App extends React.Component {
    state = {
        flow: myFlow
    }

    render () {
        return (<React.Fragment>
                    <div className="main">
                        {/* Initial circle with text */}
                       <div className="start">
                            <div className="startCircleAndLine">
                                <div className="startCircle">
                                    <div className="startBlackCircle">
                                    </div>
                                </div>
                                <div className='verticalLine'>
                                </div>
                            </div>
                            <span>Старт</span>
                        </div>
                        
                        {/* Render flow */}
                        <Flow data={this.state.flow} />
                
                        {/* Circle with add button and text */}
                        <div className="end">
                            <div className="startCircleAndLine">
                                <div className='verticalLine'>
                                </div>
                                <div className="startCircle">
                                    <div>+
                                    </div>
                                </div>
                            </div>
                            <div className="endText">Добавить шаг</div>
                        </div>
                    </div>
                </React.Fragment>);
    }
}

export default App;
