import React, {Fragment} from 'react';
import "./RichTextBox.css";
export const RichTextBox = ({ name, height, width, createAsset, getAsset, BoxType}) => {
    console.log('getAssetUrl: ', getAsset, '--', BoxType);  
    const moreOptionObj=[{'label':'A', 'text':'Rat is on the mat'},{'label':'B', 'text':'Rat is on the mat'}]
    
    const tryRequire = (path) => {
        try {
          return require('../../../images/'+path);
        } catch (err) {
         return null;
        }
      };
    function changeTextarea (){
        const multilineTextarea=document.querySelector('.wallpost-text_container textarea');
        multilineTextarea.style.height = 'auto';
        multilineTextarea.style.height = multilineTextarea.scrollHeight + 'px';
      }
    function AddMoreOption(){
        console.log('AddMoreOption: ');
        moreOptionObj.push({'label':'C', 'text':'Rat is on the mat'});
    }
    function renderMoreOption(){
      return  moreOptionObj.map(function(option, i){
           return (<div className="quiz_list list-group-item" key={i}>
           <div className="list_icon">{option.label}</div><div className="icon_label">{option.text}</div>
       </div>);
        });
    }
    function renderMoreAnswers(){
        return  moreOptionObj.map(function(option, i){
             return (<div className="quiz_list" key={i}>
             <div className={i==2?"correct list_icon": "list_icon"}>{option.label}</div>
         </div>);
          });
      }
    AddMoreOption();
    return (
      <Fragment>
          <div className="wallpost_container" width={width}>
                <div className="wallpost-text_container">
                        <textarea type="TextBox" 
                        placeholder="Start from here"
                        onChange={changeTextarea}
                        />
                </div>
                {BoxType==="quiz"&&<div className="quiz_option_container">
                    <div className="list-group">
                            {renderMoreOption()}
                    </div>
                    <div className="row quiz-answer-container">
                    <div className="quiz-answer_list col-6 text-left">
                        Correct Answer <div className="answers">{renderMoreAnswers()}</div>
                    </div>
                    <div className="quiz-answer_list col-6 text-right">
                        <div className="a-link" onClick={AddMoreOption()}> more option+ </div>
                    </div>
                    </div>
                </div>}
                
                {getAsset.length>0&&<div className="wallpost-img_container">
                    <img className="wallpost-img" src={tryRequire(getAsset[0].name)} height="200" width={width}/>
                </div>}
          </div>
      </Fragment>);
}