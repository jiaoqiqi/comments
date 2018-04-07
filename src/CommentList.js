import React,{Component} from 'react';
class CommentList extends Component{
    render(){
        const comments = [
            {username:"tony",content : "hello"},
            {username:"pick",content : "world"},
            {username:"haha",content : "hhhhhh"}
        ];
        return(
           <div>
               {comments.map((comment,i) => {
                   return(
                       <div key={i}>
                           {comment.username} : {comment.content};
                       </div>
                   )
               })}
           </div>
        )
    }
}

export default CommentList
