import React, { Component } from 'react'
import Newscmp from './newscmp';

export class news extends Component {
    constructor(props){
        super(props);
       this.state={
          article:[],
          loading:true,
          page:0
       }

    }
    async componentDidMount(){
      
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc1ac30315db43fabaebdd96ce7d2c7d&page=1&pageSize=6`;
      let response=await fetch(url);
      let data=await response.json();
      this.setState({
        article:data.articles,
        loading:false,
        page:1
      })
    }
     onRight=async()=>{
      let nxtpg=this.state.page+1;
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc1ac30315db43fabaebdd96ce7d2c7d&page=${nxtpg}&pageSize=6`;
      let response=await fetch(url);
      let data=await response.json();
      this.setState({
        article:data.articles,
        loading:false,
        page:nxtpg
      });
    }
     onLeft=async()=>{
      let prevpg=this.state.page-1
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc1ac30315db43fabaebdd96ce7d2c7d&page=${prevpg}&pageSize=6`;
      let response=await fetch(url);
      let data=await response.json();
      this.setState({
        article:data.articles,
        loading:false,
        page:prevpg
      })
    }

    
  render() {
    
    
    
     
    return (
       <div style={{textAlign:'center'}}
       className="container text-danger"
       >
        <h1 style={{margin:'20px'}}>Newsapp Presents</h1>
      <div style={{display: 'flex',
        flexWrap: 'wrap',
      textAlign:'center'}}
       >
      
        {this.state.article.map((element,index) => (
          //  <h1>{element.urlToImage}</h1>
          //  <img src={element.urlToImage} alt='nothing'/>
           <Newscmp key={index} element={element}/>
          ))}
        </div>
        <div className="clearfix "
        style={{marginBottom:'15px',
           marginLeft:'62px',marginRight:'-12px'
           
        }}>
          <button type="button" disabled={this.state.page===1} onClick={this.onLeft} className="btn btn-secondary float-start">Left</button>
          <button type="button" onClick={this.onRight} className="btn btn-secondary float-end">Right</button>
        </div>
       </div> 
    
    )
  }

}
export default news

