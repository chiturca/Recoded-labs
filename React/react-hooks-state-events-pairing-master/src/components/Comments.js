function Comments({comments}) {
    const all= comments.map(comment=>{return(
        <div key={comment.id}>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>
        </div>
    )})
    return(
        <div>
            <h2>{comments.length} Comments</h2>
            {all}
        </div>
    )
}

export default Comments;