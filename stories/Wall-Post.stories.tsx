import React, { useEffect, useState } from 'react';
import '@lipihipi/theme';
import {  } from '../src';
import { BrowserRouter } from 'react-router-dom';
import {Wall}  from '../src/components/wallpost/Wall/Wall';
import EducrackAPI from '@lipihipi/client-sdk';

export default {
  title: 'Walls',
};

export const Posts = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    EducrackAPI.auth
      .login({
        email: 'admin@educrack.com',
        password: 'password',
      })
      .then(() => {
        setLoggedIn(true);
      });
  }, []); 
  return (
    <BrowserRouter>
        <Wall />
    </BrowserRouter>
  );
};

/*export const EditQuestion = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    EducrackAPI.auth
      .login({
        email: 'admin@educrack.com',
        password: 'password',
      })
      .then(() => {
        setLoggedIn(true);
      });
  }, []);

  return (
    <BrowserRouter>
      {isLoggedIn && (
        <QuestionForm
          getSubjects={EducrackAPI.subject.list}
          createAsset={EducrackAPI.asset.create}
          getTopics={EducrackAPI.topic.list}
          getQuestion={EducrackAPI.question.get}
          createQuestion={EducrackAPI.question.create}
          updateQuestion={EducrackAPI.question.update}
          getAssetUrl={EducrackAPI.asset.getAssetUrl}
          getCourses={EducrackAPI.course.list}
          getExams={EducrackAPI.exam.list}
          _id={'5f270176b959747e5c6d2687'}
        />
      )}
    </BrowserRouter>
  );
}; */
