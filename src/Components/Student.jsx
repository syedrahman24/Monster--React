const Student = (props) =>{
    console.log(props)
    return(
        <>
        
            <div className="student-card">
                <h3>Name: {props.name}</h3>
                <h3>Subject: {props.subject}</h3>
                <h3>Class: {props.class}</h3>
                <h3>City: {props.city}</h3>
            </div>
            
       
        

        </>
    )

}

export default Student;