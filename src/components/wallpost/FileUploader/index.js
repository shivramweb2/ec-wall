import React, {Fragment} from 'react';
import "./FileUploader.css";
export const FileUploader = ({ id, name, upload, accept, maxSize, className, label}) => {    
    function handleUpload(){
        document.querySelector('#'+id).click();
    }    
    function handleFileSelect(e) {
        const files = Array.from(e.target.files)
        upload(files);
      }
    return (
      <div className={className}>
            <label class="sc-fzoXzr bmLEHI">{label&& label}  </label>
          <div className="fileupload_container" >
                <div className="fileupload_icon" onClick={handleUpload}>
                    file
                </div>
                <input id={id} accept={accept} type="file" onChange={(e)=>handleFileSelect(e)} style={{display:"none"}}/>
          </div>
      </div>);
}