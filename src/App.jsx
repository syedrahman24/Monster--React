import Paragraph from "./Components/Paragraph";
import Student from "./Components/Student";

const App = () =>{
  return (
    <div className="card-container">
      <Paragraph fname="Syed" lname="Abdur"/>

      <div className="student-container">
        <Student name = "syed" class="10" subject="Maths" city="Hyderabad"/>
        <Student name = "qasim" class="9" subject="science" city="Mumbai"/>
        <Student name = "Osman" class="8" subject="Social" city="Pune"/>
        
      </div>
      
    </div>
  )
}

export default App;