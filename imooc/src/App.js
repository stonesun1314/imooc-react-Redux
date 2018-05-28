import React from 'react'

class App extends React.Component{
  render(){
    const boss = '李云龙';
    return(
       <div>
      <h2>独立团，团长{boss}</h2>
      <一营 老大="张大彪"></一营>
      <骑兵连 老大="孙德胜"></骑兵连>
    </div>)

  }
};

//简写成函数名字
function 骑兵连(props) {
  return <h2>骑兵连连长{props.老大},冲啊</h2>
}

class 一营 extends React.Component{
  constructor(props){
    super(props)
    console.log('constructor');
    this.state = {
      solders:['虎子','柱子','王根生']
    }
    this.addSolder = this.addSolder.bind(this)
  }

  componentWillMount(){
    console.log('组件马上就要加载了');
  }

  componentDidMount(){
    console.log('组件加载完毕');

  }
  addSolder(){
    console.log('add solder');
    this.setState({
      solders:[...this.state.solders,'新兵蛋子'+Math.random()]
    })

  }
  render(){
    console.log('组件正在加载了');

    return (
      <div>
      <h2>一营营长,{this.props.老大}</h2>
      <button onClick={this.addSolder}>新兵入伍</button>
      <ul>
        {this.state.solders.map(v=>{
          return <li key = {v}>{v}</li>
        })}
      </ul>
      </div>


    )
  }
};

export default App
