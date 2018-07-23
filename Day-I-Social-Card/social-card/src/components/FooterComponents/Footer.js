import React from 'react'; 
import ReactDom from 'react-dom'; 
import './Footer.css';


 

// const Footer = () => { 
//     let comment = 0;
//     let sync = 0;
//     return (
//     <div className="footer">
//         <i onClick ={prompt('enter comment')}className="far fa-comment">{comment}</i>
//         <i onClick={() => sync++} className="fas fa-sync">{sync}</i>
//         <i className="far fa-heart"></i>
//         <i className="far fa-envelope"></i>
//     </div>
//     );
// }


class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {sync: "", like:"", comment:0, message:0}
        this.handleSyncClick = this.handleSyncClick.bind(this); 
        this.handleLickClick = this.handleLikeClick.bind(this);
        this.handleCommentClick = this.handleCommentClick.bind(this);
        this.handleMessageClick = this.handleMessageClick.bind(this); 
    }

    handleSyncClick() {
        if(Number.isInteger(this.state.sync)){
            this.state.sync +=1; 
            this.forceUpdate();
        } else {
            this.state.sync = 1;
            this.forceUpdate(); 
        }
         
    }

    handleLikeClick(){
        if(Number.isInteger(this.state.like)){
            this.state.like ++;
            this.forceUpdate(); 
        }else {
            this.state.sync = 1;
            this.forceUpdate(); 
        }
        
    }

    handleCommentClick(){
        let answer = prompt("enter comment");
        answer;
        if(answer.length > 5){
            this.state.comment ++;
            this.forceUpdate(); 
        }   
    }

    handleMessageClick() {
        this.state.message ++;
        alert("Message sent");
        this.forceUpdate(); 
    }

    render(){
        return (
            <div className="footer">
                <i onClick = {this.handleCommentClick} className="far fa-comment">  {this.state.comment}</i>
                <i onClick={this.handleSyncClick} className="fas fa-sync">  {this.state.sync}</i>
                <i onClick={this.handleLickClick}className="far fa-heart">  {this.state.like}</i>
                <i onClick={this.handleMessageClick}className="far fa-envelope">  {this.state.message}</i>
            </div>
            );
    }
}


export default Footer; 



