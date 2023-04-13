function HideComments({hide,setHide}) {
    return(
        <div>
            <button onClick={()=>setHide(!hide)}>{!hide ? "Show Comments" : "Hide Comments"} </button>
        </div>
    )
}

export default HideComments;