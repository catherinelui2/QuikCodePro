import React, {useState,useEffect} from 'react'
import TheNav from '../components/thenav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import AceModalUser  from '../components/codemodaluser'
import FollowModal from '../components/followModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'
import { faGhost } from '@fortawesome/free-solid-svg-icons'
import { faCouch } from '@fortawesome/free-solid-svg-icons'
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons'
import { faDove } from '@fortawesome/free-solid-svg-icons'
import { faBomb } from '@fortawesome/free-solid-svg-icons'
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserInjured } from '@fortawesome/free-solid-svg-icons'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { faHippo } from '@fortawesome/free-solid-svg-icons'
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons'
import { faCat } from '@fortawesome/free-solid-svg-icons'
import { faFrog } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import AvatarOption from '../components/avatarOp'


const Avatars = [
    {
        "name":"Plant",
        "icon":faSeedling,
        "size":"7x"
    },
    {
        "name":"Frog",
        "icon":faFrog,
        "size":"7x"
    },
    {
        "name":"Wizard",
        "icon":faHatWizard,
        "size":"7x"
    },
    {
        "name":"Burger",
        "icon":faHamburger,
        "size":"7x"
    },
    {
        "name":"Guitar",
        "icon":faGuitar,
        "size":"7x"
    },
    {
        "name":"Ghost",
        "icon":faGhost,
        "size":"7x"
    },
    {
        "name":"Couch",
        "icon":faCouch,
        "size":"7x"
    },
    {
        "name":"Drumstick",
        "icon":faDrumstickBite,
        "size":"7x"
    },
    {
        "name":"Bird",
        "icon":faDove,
        "size":"7x"
    },
    {
        "name":"Bomb",
        "icon":faBomb,
        "size":"7x"
    },
    {
        "name":"Apple",
        "icon":faAppleAlt,
        "size":"7x"
    },
    {
        "name":"Injured Person",
        "icon":faUserInjured,
        "size":"7x"
    },
    {
        "name":"Ninja",
        "icon":faUserNinja,
        "size":"7x"
    },
    {
        "name":"Person",
        "icon":faUser,
        "size":"7x"
    },
    {
        "name":"Tie Person",
        "icon":faUserTie,
        "size":"7x"
    },{
        "name":"Hippo",
        "icon":faHippo,
        "size":"7x"
    },{
        "name":"Dog",
        "icon":faDog,
        "size":"7x"
    },{
        "name":"Home Slice",
        "icon":faBreadSlice,
        "size":"7x"
    },{
        "name":"Cat",
        "icon":faCat,
        "size":"7x"
    }
    ]
const example =[{name: "example"}, {name: "example2"}]
const follow =[{name: "Bob", skills:"none"}]


function Profile(){
//avatar toggle
 const [avatarState,setAvatar]= useState()
function avatarInputChange(event) {
        const currentAvatar = event.target.value;
        Avatars.forEach(item=>{
                        if(currentAvatar=== item.name){
                setAvatar(item.icon)
            }
        })
        handleUserFormInput(event)
    };
// lists for code snippets and users
const [snipList,setSnipList]= useState([]);
const [userList,setUserList]= useState([]);
const [userSearchState,setUserSearchState]=useState({})
const [userFormState,setUserFormState]=useState({})
const [privateInputState,setPrivateInputState]=useState({})

function handlePrivateInput (event){    
    const { name, value } = event.target;
    setPrivateInputState({...privateInputState, [name]: value })
}

const handleUserInput =(event)=>{
    const { name, value } = event.target;
    setUserSearchState({...userSearchState, [name]: value })
    console.log(userSearchState)
}

const handleUserFormInput =(event)=>{   
    const { name, value } = event.target;
    setUserFormState({...userFormState, [name]: value })
    console.log(userFormState)
}

const privateSearchCode = ()=>{}
const userSearch =() =>{}
const updateUser =()=>{}

    return(<>
<TheNav/>
<Container>
    <Row>
        <Col sm={12} md={3}>
            <Jumbotron style={{marginTop:"10%", display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center", textAlign:"center",opacity:"0.7" }}>
            <h4>Private Code Search</h4>
            <Form.Control size="sm" as="select" onChange={handlePrivateInput} name="language">
                <option>Code type</option>
                <option>Javascript</option>
                <option>HTML</option>
                <option>CSS</option>
                <option>Mark Down</option>
                <option>Handlebars</option>
   
            </Form.Control>
            <br />
            <InputGroup  size="sm" className="mb-3" onChange={handlePrivateInput}>
                    <InputGroup.Prepend >
                    <InputGroup.Text  id="Keywords"></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl name ="keywords"aria-label="Small" aria-describedby="Keywords" placeholder="KeyWords" />
                </InputGroup>
            <Button onClick={privateSearchCode}>Search</Button>
            <br />
            {example.map(item=>  <><AceModalUser name={item.name}  /><br /></>)}
            </Jumbotron>
        </Col>
        <Col sm={12} md={6}>
            <Jumbotron style ={{marginTop:"5%", display: "flex", flexDirection:"column",alignItems:"center", justifyContent:"center",opacity:"0.7" }}>
            <FontAwesomeIcon icon={avatarState} size="7x"></FontAwesomeIcon>
            <Form.Control size="sm" as="select" name="avatar" onChange={avatarInputChange}>
            <option>Choose an Avatar</option>
            {Avatars.map(item =><AvatarOption name={item.name}></AvatarOption>)}
            </Form.Control>
<hr />
            <h1>Username:<span></span></h1>
            <textarea style={{width:"80%"}} rows="7" name="bio" onChange={handleUserFormInput} placeholder="Write Your Bio Here"></textarea>
            <br />
            <Button onClick={updateUser}>Update</Button>
            </Jumbotron>
            
        </Col>
        <Col sm={12} md={3}>
            <Jumbotron style ={{marginTop:"10%", display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center",textAlign:"center", opacity:"0.7"}}>
                <h4>Follow a User</h4>
            <InputGroup size="sm" className="mb-3" onChange={handleUserInput}>
                <InputGroup.Prepend>
                <InputGroup.Text id="user-search"></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="user-search" placeholder="User Search" name="search" />
        </InputGroup>
  <br />
  
  <Button onClick ={userSearch}>Search</Button>
  <br />
  {follow.map(item=><><FollowModal name ={item.name} skills ={item.skills}/> <br /></>)}
            </Jumbotron>
        </Col>
    </Row>
</Container>
{/* jokes @ bottom */}

</>)
    
}
export default Profile