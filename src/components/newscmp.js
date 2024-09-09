import React, { Component } from 'react'

export default class newscmp extends Component {
  render() {
    
    //  let val="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569_640.jpg" 
    
    return(
        
        <div className="card" style={{width: '18rem',margin:'60px'}}>
        <img src={(!this.props.element.urlToImage)?"https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569_640.jpg":this.props.element.urlToImage} className="card-img-top" alt="can't show"/>
        <div className="card-body">
        <h5 className="card-title text-primary">{this.props.element.title}</h5>
        <p className="card-text">{this.props.element.description}</p>
        <a href="/news" className="btn btn-primary">Read more</a>
        </div>
        </div>
    
    )
  }
}
