import React, { useEffect, useState, Fragment } from 'react';
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
//import { FieldArray } from 'formik';
//import { MdDelete } from 'react-icons/md';
//import { IQuestionForm } from 'question-form/question-form.types';
//import { validationSchema } from './helper';


const optionMapper = (options) => {
  return options.map((option) => ({ label: option.name, value: option._id }));
};

const WallForm = ({
  getSubjects,
  getTopics,
  _id,
  getQuestion,
  createAsset,
  createQuestion,
  updateQuestion,
  getCourses,
  getExams,
  getAssetUrl,
}: IQuestionForm) => {
  const [subjects, setSubjects] = useState([]);
  const [courses, setCourses] = useState([]);
  const [exams, setExams] = useState([]);
  //const [err, seterr] = useState<string[]>([]);
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

  /*const handleSubjectChange = (option: any) => {
    getTopics({ subject: option.value, all: true }).then(({ data }) => {
      setTopics(data.topics);
    });
  };

  const errorTextHandler = () => {
    return err.map((i) => <p>{i}</p>);
  };

  useEffect(() => {
    getCourses({ all: true }).then(({ data }: any) => setCourses(data.courses));
    getExams({ all: true }).then(({ data }: any) => setExams(data.exams));
    getSubjects({ all: true }).then(({ data }) => {
      setSubjects(data.subjects);
    });

    if (_id) {
      getQuestion(_id).then(({ data }) => {
        setData(data);
        handleSubjectChange({ value: data.subject });
      });
    }
  }, []);

  const optionValidator = (values: any) => {
    let errArr = values.questions
      .map((item: any, index: number) => {
        if (item.options) {
          let arr = item.options.filter((e: any) => e.isAnswer);
          if (item.type === 'SA' && arr.length !== 1) {
            return `Question ${index + 1} can have 1 correct option`;
          }
          if (item.type === 'MA' && arr.length === 0) {
            return `Question ${index + 1} must have atleast 1 correct option`;
          }
        } else {
          if (item.type === 'SA' || item.type === 'MA') {
            return `Question ${index + 1} options are required`;
          }
        }
        return null;
      })
      .filter((i: string) => i);
    seterr(errArr);
    return !errArr.length;
  };
*/
  const handleSave = (values, formik) => {
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
               
                    <FileUpload
                        name="asset"
                        upload={createAsset}
                        accept={['jpeg/*, png/*']}
                        label={'File Label'}
                        type={'single'}
                        maxSize={'5mb'}
                        />
                     <div className="form-group">
                        <CheckBox
                            name={'hasCommonData'}
                            id={'hasCommonData'}
                            label={'My Check Box'}
                         />
                    </div>
                     <RichText
                        getAssetUrl={"sfsfdffd sfafdsfdsfdsfds"}
                        name={'commonData'}
                        height={200}
                        width={400}
                        createAsset={""}
                        />
                  
                </div>
            </Fragment>)
          }
        />
       </div>
       </div>);
}



export default WallForm;