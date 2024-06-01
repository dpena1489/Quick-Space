import { useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function ListProperties(){
    const [spaces, setSpaces] = useState([])

    const {id}= useParams()

    
    
    
    useEffect(()=> {
            const groupSpaceData = [
                {
                    id: 1,
                    name: "Space 1",
                },
                {  
                    id: 2,
                    name: "Space 2",
                },
                {
                    id: 3,
                    name: "Space 3",
                }
            ]
        
            const studioSpaceData = [
                {
                    id: 4,
                    name: "Space 4",
                },
                {  
                    id: 5,
                    name: "Space 5",
                },
                {
                    id: 6,
                    name: "Space 6",
                }
            ]
        
            const studySpaceData = [
                {
                    id: 4,
                    name: "Space 4",
                },
                {  
                    id: 5,
                    name: "Space 5",
                },
                {
                    id: 6,
                    name: "Space 6",
                }
            ]
            
 if(id === "group-space"){
            setSpaces(groupSpaceData)  
        } else if(id === "studio-space"){
            setSpaces(studioSpaceData)
        } else if(id === "study-space"){
            setSpaces(studySpaceData)
        }
        }, [])

        console.log(id);
        
    return(
        <>
        
        {spaces?.map((card) => (
              <div className={"my-4"} key={card.id}>
                <Card style={{ width: '18rem' }}>
                  {/* <Card.Img variant="top" src={card.imageSrc} style={{
                    minHeight: "250px",
                    maxHeight: "250px"
                  }} /> */}
                  <Card.Body>
                    <Card.Title style={{ color: 'white' }}>card.title</Card.Title>
                    <Card.Text style={{ minHeight: "150px" }}>card.text</Card.Text>
                    <Link to={`/details/${card.id}`}>
                      <button
                        type="button"
                        className="rounded-md bg-sky-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        {card.name}
                      </button>
                    </Link>
                    </Card.Body>
                </Card>
              </div>
            )
          )}
        </>
    )
}