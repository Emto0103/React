import React from "react";
import Comment from "./Comment";
import comment from "./Comment";

const comments = [
    {
        name: "이인제",
        comment: "안녕하세요, 소플입니다.",
    },
    {
        name: "유재석",
        comment: "리액트 재미있어요!.",
    },
    {
        name: "강민경",
        comment: "저도 리액트 배워 보고 싶어요!!.",
    },
];
function CommentList(props){
    return(
        // <div>
        //     <Comment name={"윤준석"} comment={"컴포넌트 합성 실습 중"}/>
        //     <Comment name={"김민지"} comment={"컴포넌트 합성 실습 중"}/>
        //     <Comment name={"윤준석"} comment={"컴포넌트 합성 실습 중"}/>
        // </div>
        <div>
            {comments.map((comment) =>{
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;