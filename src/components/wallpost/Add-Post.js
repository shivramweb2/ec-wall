import React, { useEffect, useState, Fragment } from 'react';
import {RichTextBox} from '../../components/wallpost/RichTextBox/RichTextBox';
import {FileUploader} from '../../components/wallpost/FileUploader'; 
import {
  CheckBox,
  ConditionalField,
  Form,
  Input,
  Label,
  Select,
  FileUpload,
  RadioButtons,
} from '@lipihipi/form';
import { RichText } from './rich-text';
import { Button, PageHeader } from '@lipihipi/ec-ui';

const optionMapper = (options) => {
  return options.map((option) => ({ label: option.name, value: option._id }));
};

function handleFormSubmit(){
  console.log(this.form);
  alert('form submit');
}
const WallForm = ({
  _id,
  getQuestion,
  createQuestion,
}: IQuestionForm) => {
  const [subjects, setSubjects] = useState([]);
  const [PostType, setPostType] = useState([]);
  const [Asset, setAssetUrl] = useState([]);
  const [topics, setTopics] = useState([]);
  const [data, setData] = useState({
    questions: [],
    topic: '',
    subject: '',
    questionType: '',
    hasCommonData: false,
    difficulty: '',
    commonData: '',
  });
  const mySelectObj =[
      { "name":"Normal Post", "_id":"default"},
      { "name":"Quiz Post", "_id":"quiz" }
    ];
  const createCustomAsset=(Asset)=>{
     setAssetUrl(Asset);
  }
  const handlePostTypeChange = (option) => {
    setPostType(option.value);
  };

  
  useEffect(() => {
    setAssetUrl(Asset);
    setPostType(PostType);
    if (_id) {
      getQuestion(_id).then(({ data }) => {
        setData(data);
        handlePostTypeChange({ value: data.subject });
      });
    } 
  }, []);

  
  const handleSave = (values, formik) => {
    console.log('formik: ', formik, 'values: ', values);
    console.log('forms -- ', this.props);
    if (optionValidator(values)) {
      if (_id) {
        updateQuestion(values).then(() => {});
      } else {
        createQuestion(values).then(() => {
          formik.resetForm();
        });
      }
    }
  }; 

  return (
        <div>
      <PageHeader
        title={'Add Post'}
        breadCrumbs={[
          { title: 'Home', link: '/admin' },
          { title: 'Posts', link: '/admin/posts' },
          { title: 'Create New Post', link: '/admin/posts/new' },
        ]}
      />
       <div className="container">
       <Form
          initialValues={data}
          onSubmit={handleSave}         
          render={() => (
            <Fragment>
               <div className="form-group">
               <div className="row">
                  <Select
                    id={'course'}
                    name={'course'}
                    label={'Select Type'}
                    className={'col-10 col-sm-10'}
                    required={true}
                    onChange={handlePostTypeChange}
                    options={optionMapper(mySelectObj)}
                  />
                  <FileUploader
                        name="asset"
                        id={'custumFileload'}
                        upload={createCustomAsset}
                        accept={['jpeg/*, png/*']}
                        type={'single'}
                        maxSize={'5mb'}
                        className={'col-2 col-sm-2 mt-1'}
                        />
                       </div>
                    </div>
                    <div className="form-group">
                        <RichTextBox 
                            name={""} 
                            height="" 
                            width=""
                            BoxType={PostType}
                            getAsset={Asset}
                            />
                      <div className="col text-center mt-2">
                      <CheckBox
                            name={'hasCommonData'}
                            id={'hasCommonData'}
                            label={'Allow comments'}
                         />
                        </div>                       
                    <div className="col text-center">
                          <Button shape={'primary'} type="submit">
                            Submit
                          </Button>
                        </div>
                    </div>
                     
                  
            </Fragment>)
          }
        />
       </div>
       </div>);
}



export default WallForm;