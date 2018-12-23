import React from 'react';
import './App.css';
/*import {Add} from './components/Add';*/
import {Flow} from './components/Flow';
import myFlow from './data/flowData' ;

class App extends React.Component {
    state = {
        flow: myFlow
        //flow: null,
        //isLoading: false
    }

 /*   handleAddNews = (data) => {
        // сначала мы формируем массив, на основе
        // всего того, что уже было в новостях
        // и кладем это все в новый массив +
        // новую новость кладем в начало массива
        const nextNews = [data, ...this.state.news];
        // затем обновляем новый массив новостей в this.state.news
        this.setState({ news: nextNews });
    }*/

/*
    componentDidMount() {
        this.setState({isLoading:true});
        fetch("http://localhost:3000/data/newsData.json")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setTimeout( () => {
                    this.setState({news:data, isLoading:false})
                    }, 3000);
                }
                );
    }
    */
    render () {
        //const {news, isLoading} = this.state;
        //const flow = this.state;
        return (<React.Fragment>
                    <div className="main">
                        {/*<Add onAddNews={this.handleAddNews}/>*/}
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
                        
                        
                        {/*{isLoading && <p>Загружаю...</p>}*/}
                        {/*{Array.isArray(flow) && <Flow someFlow={flow} />}*/}
                        <Flow data={this.state.flow} />
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
