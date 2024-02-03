// FamilyForm.js
import React, { useState } from 'react';

const FamilyForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
  });
  const [attachmentStyle, setAttachmentStyle] = useState('');
  const [assiState, setAssiState] = useState('');

  const handleAnswerChange = (question, answer) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [question]: answer }));
  };

  const determineAttachmentStyle = () => {
    // Logic to determine attachment style based on answers
    // This is a simple example; you can customize it as needed
    if (answers.q1 === 'Yes' && answers.q2 === 'No' && answers.q3 === 'Yes' && answers.q4 === 'No' && answers.q5 === 'Yes') {
      setAttachmentStyle('secure');
    } else if (answers.q1 === 'No' && answers.q2 === 'Yes' && answers.q3 === 'No' && answers.q4 === 'Yes' && answers.q5 === 'No') {
      setAttachmentStyle('anxious');
    } else if (answers.q1 === 'No' && answers.q2 === 'Yes' && answers.q3 === 'No' && answers.q4 === 'No' && answers.q5 === 'No') {
      setAttachmentStyle('avoidant');
    } else {
      setAttachmentStyle('fearful-avoidant');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    determineAttachmentStyle();
    onSubmit({ name, attachmentStyle, assiState });
    // Reset form fields after submission
    setName('');
    setAnswers({
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
    });
    setAssiState('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Family Member</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Answer the following questions:</label>
      <div>
        <label>1. Do you feel comfortable getting close to others?</label>
        <select value={answers.q1} onChange={(e) => handleAnswerChange('q1', e.target.value)}>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <label>2. Do you find it difficult to trust others completely?</label>
        <select value={answers.q2} onChange={(e) => handleAnswerChange('q2', e.target.value)}>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <label>3. Do you worry that others will not value you?</label>
        <select value={answers.q3} onChange={(e) => handleAnswerChange('q3', e.target.value)}>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <label>4. Do you find it easy to get close to others?</label>
        <select value={answers.q4} onChange={(e) => handleAnswerChange('q4', e.target.value)}>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <label>5. Do you often worry about being abandoned?</label>
        <select value={answers.q5} onChange={(e) => handleAnswerChange('q5', e.target.value)}>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <label>ASSI State:</label>
      <input type="text" value={assiState} onChange={(e) => setAssiState(e.target.value)} />

      <button type="submit">Add Member</button>
    </form>
  );
};

export default FamilyForm;
