import React, { useState, useRef, useEffect } from 'react'

import {Button, Modal, ModalHeader,ModalBody, ModalFooter, Form, FormGroup,Input, InputGroup,InputGroupAddon, Alert}from 'reactstrap'

import axios from 'axios'
import ReactAce from 'react-ace';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/mode/markdown';
import 'brace/mode/handlebars';
import 'brace/theme/monokai';
import $ from "jquery";
import Editable from 'react-editable-title';
import './codemodaluser.css';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";


function AceModelUser({name, title, snip, sniptwo, snipthree, Public, language, languagetwo, languagethree, comments, userId,_id,keywords, feedback}){
  
  const [snipOne, setSnipOne] = useState(snip);
  const [snipTwo, setSnipTwo] = useState(sniptwo);
  const [snipThree, setSnipThree] = useState(snipthree);
  const [modal, setModal] = useState(false);
  const [text, setText] = useState(name)
  const [showUpdateAlert, setShowUpdateAlert] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);


   //tag functionality
   const [tags, setTags] = React.useState(keywords.split(","));
   //creating the array of tags to be added to snipData
   const tagArr = tags.map(tag => tag);


    const toggle = () => {setModal(!modal);
    setSnip({title:name,
      comments:comments,
      languageOne:language,
      languageTwo:languagetwo,
      languageThree:languagethree,})
    }

    const updateAlert = () => {
      setShowUpdateAlert(true);
      setTimeout(() => {
        setShowUpdateAlert(false);
      }, 2000);
    }

    const deleteAlert = () => {
      setShowDeleteAlert(true);
      setTimeout(() => {
        setShowDeleteAlert(false);
      }, 5000);
    }

  
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    const [snipState,setSnip] =useState({
      title:text,
      comments:comments,
      languageOne:language,
      languageTwo:languagetwo,
      languageThree:languagethree,
    })
    const [privacy,setPrivacy] =useState(Public)
    const [showEditor2, setEditor2] =useState(false)
    const [showEditor3, setEditor3] =useState(false)

    
    const handlePrivacy=(e)=>{
      let setting = e.target.value
      if (setting === "Public"){
          setPrivacy(true)
      }else{
        setPrivacy(false)
      }
  }

    useEffect(() => {
      if (sniptwo.length > 0) {
        setEditor2(true)
        setEditor3(false)
      } 
      if (snipthree.length > 0) {
        setEditor2(true)
        setEditor3(true)
      }
  })

    
    function handleSnipInput(event){
      const { name, value } = event.target;
      setSnip({...snipState, [name]: value })
    }

    function handleTitleChange(newTitle) {
      setText(newTitle)
    }

    const [Language, setLanguage] = useState(language);
    const [LanguageTwo, setLanguageTwo] = useState(languagetwo);
    const [LanguageThree, setLanguageThree] = useState(languagethree)

    function languageSelect(event) {
        setLanguage($("#languageSelect").val());
        handleSnipInput(event)
    }
    const ace1 = useRef(null);
    const ace2 = useRef(null);
    const ace3 = useRef(null);
    const textAreaRef1 = useRef(null);
    const textAreaRef2 = useRef(null);
    const textAreaRef3 = useRef(null);

    function toTextArea1() {
      setSnipOne(ace1.current.editor.getValue());
  }
  function toTextArea2() {
      setSnipTwo(ace2.current.editor.getValue());
  }
  function toTextArea3() {
      setSnipThree(ace3.current.editor.getValue());
  }


    function copyClipboard1() {
      textAreaRef1.current.select();
      document.execCommand('copy');
    }

    function copyClipboard2() {
      textAreaRef2.current.select();
      document.execCommand('copy');
    }

    function copyClipboard3() {
      textAreaRef3.current.select();
      document.execCommand('copy');
    }
    
    const updateSnip =()=>{
      axios.put('/api/codes/codes/'+_id,{_id:_id, userId:userId,title:text, comments:snipState.comments, public:privacy, snip:snipOne, snipTwo:snipTwo, snipThree:snipThree, scriptType:snipState.languageOne, scriptTypeTwo:snipState.languageTwo, scriptTypeThree: snipState.LanguageThree, updated:Date.now, keywords:tagArr.join(","), votes:feedback}).then(data=> console.log(data)).catch(err=>console.log(err))
      updateAlert(); 
  }
    const deleteSnip =()=>{axios.delete('/api/codes/codes/'+_id,{params:{_id: _id}}).then(data=>{
      console.log(data);
    } )
    .catch(err=> console.log(err))
    deleteAlert();
  }
  

  
    return (

  <div>
    <Button color="primary" onClick={toggle}>{name}</Button>
    <Modal className ="mx-auto " isOpen={modal} toggle={toggle} >
      <ModalHeader toggle={toggle} close={closeBtn}>
          <Editable text={text} editButton editButtonStyle placeholder="Add Title Here" cb={handleTitleChange}></Editable>
      </ModalHeader>
      <ModalBody>

        {/* this is for the first editor */}
          <div className = "card d-flex px-3 pb-3 mb-3 bg-secondary">
          <h4 className = "text-center text-white mt-2">Editor One</h4>
            <div className="editor d-flex my-2">
              <ReactAce ref={ace1} name="editorOne" className="d-flex" mode={Language} theme="monokai" setReadOnly={false} width={465} onChange={toTextArea1} maxLines={Infinity} value={snipOne}/>
              <textarea  ref={textAreaRef1} value={snipOne} className="textArea"></textarea>
            </div>
              <Input type="select" name="languageOne" value={snipState.languageOne} id="exampleSelectMulti"  onChange={languageSelect}>
                  <option value="html">HTML</option>
                  <option value="javascript">Javascript</option>
                  <option value="css">CSS</option>
                  <option value="markdown">Mark Down</option>
                  <option value="handlebars">Handlebars</option>
              </Input>
              <Button color="primary" onClick={copyClipboard1} className="btn btn-primary mx-4 mt-2 ">Copy Code</Button>
          </div >
        {/* this is where the first editor ends */}

        {/* this is where the second editor begins */}
        { showEditor2 ?
          <div className="card d-flex px-3 pb-3 my-3 bg-secondary">
            <h4 className = "text-center text-white mt-2">Editor Two</h4>
              <div className="editor d-flex my-2">
                  <ReactAce ref={ace2} name="editorTwo" mode={LanguageTwo} theme="monokai" setReadOnly={false} width={465} maxLines={Infinity} value={snipTwo}  onChange={toTextArea2}/>
                  <textarea  ref={textAreaRef2} value={snipTwo} className="textArea"></textarea>
                    
              </div>
            <Input name="languageTwo" value={snipState.languageTwo} type="select" id="languageSelect" onChange={languageSelect}>
                <option value="html">HTML</option>
                <option value="javascript">Javascript</option>
                <option value="css">CSS</option>
                <option value="markdown">Mark Down</option>
                <option value="handlebars">Handlebars</option>
            </Input>
            <Button color="primary" onClick={copyClipboard2} className="primary mx-4 mt-2 ">Copy Code</Button>
          </div>
        : null }
        {/* this is where the second editor ends */}
          
        {/* this is where the third editor begins */}
        { showEditor3 ?
          <div className="card d-flex px-3 pb-3 my-3 bg-secondary">
            <h4 className = "text-center text-white mt-2">Editor Three</h4>
              <div className="editor d-flex my-2">
                  <ReactAce ref={ace3} name="editorThree" mode={LanguageThree} theme="monokai" setReadOnly={false} width={465} maxLines={Infinity} value={snipThree}  onChange={toTextArea3}/>
                  <textarea  ref={textAreaRef3} value={snipThree} className="textArea"></textarea>     
              </div>
            <Input name="languageThree" value={snipState.languageThree} type="select" id="languageSelect" onChange={languageSelect}>
                <option value="html">HTML</option>
                <option value="javascript">Javascript</option>
                <option value="css">CSS</option>
                <option value="markdown">Mark Down</option>
                <option value="handlebars">Handlebars</option>
            </Input>
            <Button color="primary" onClick={copyClipboard3} className="btn btn-primary mx-4 mt-2" >Copy Code</Button>
          </div>
        : null }
        {/* this is where the third editor ends */}
          <h6 className="mt-2 ">Sharing Preference</h6>
          <Input name="Public" size="sm" type="select" onChange={handlePrivacy}>
              <option>Sharing Preferences</option>
              <option>Private</option>
              <option>Public</option>
          </Input>
          <div className="my-4" >
                    <ReactTagInput  tags={tags} onChange={(tagArr) => setTags(tagArr)} />
          </div>
          <h6 className="mt-2 ">Comments</h6>
          <Input type="textarea" value={snipState.comments} name="comments" id="exampleText" onChange={handleSnipInput} placeholder="notes" />
      </ModalBody>
      {showUpdateAlert? (<Alert color="success"> You made it better?!!</Alert>): null}
      {showDeleteAlert? (<Alert color="danger"> Code has been murdered, try searching for it again you will never find it..</Alert>): null}
      <ModalFooter style={{ display:"flex",justifyContent:"space-between"}}>
        <Button color="danger" onClick={deleteSnip}>Delete</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
        <Button color="primary" onClick={updateSnip}>Update</Button>
      </ModalFooter> 
    </Modal>

  </div>




            
)


}
export default AceModelUser