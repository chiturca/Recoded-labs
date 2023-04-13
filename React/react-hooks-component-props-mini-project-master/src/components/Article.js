const emojis= (minutes)=>{
    let string="";

    if (minutes < 30) {
        for (let i = 0; i < minutes; i+=5) {
           string += "☕";
        }
    }else{
        for (let i = 0; i < minutes; i+=10) {
            string += "🍱";
            
        }
    }
    return string
}


function Article({ title, date="January 1, 1970", preview, minutes }) {
    const emojiz=emojis(minutes);
    
    return(
        <article>
            <h3>{title}</h3>
            <small>{date} •••{emojiz} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;