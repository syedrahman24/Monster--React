const Paragraph = (props) =>{

    console.log(props)
    return(


        <>
            <h3>Hello {props.fname} {props.lname}</h3>
        </>
    )
}

export default Paragraph;