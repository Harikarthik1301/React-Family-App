import React, { useState, useEffect } from 'react';
import FamilyForm from './components/FamilyForm';
import FamilyTree from './components/FamilyTree';
import './App.css';

const App = () => {
  const [familyMembers, setFamilyMembers] = useState([]);

  useEffect(() => {
    // Fetch family tree data when the component mounts
    // Replace 'your-project-id' with your actual Firebase project ID
    fetchFamilyTree();
  }, []);

  const fetchFamilyTree = async () => {
    try {
      const response = await fetch('https://family-app-1373f-default-rtdb.firebaseio.com/familyMembers.json');
      const data = await response.json();
      console.log(data);
      if (data) {
        const familyMembersArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setFamilyMembers(familyMembersArray);
      }
    } catch (error) {
      console.error('Error fetching family tree:', error);
    }
  };

  const addFamilyMember = async (newMember) => {
    try {
      const response = await fetch('https://family-app-1373f-default-rtdb.firebaseio.com/familyMembers.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMember),
      });

      if (response.ok) {
        const createdMember = await response.json();
        setFamilyMembers([...familyMembers, { id: createdMember.name, ...newMember }]);
      } else {
        console.error('Error creating family member');
      }
    } catch (error) {
      console.error('Error creating family member:', error);
    }
  };

  return (
    <div>
      <h1>Family Tree Application</h1>
      <FamilyForm onSubmit={addFamilyMember} />
      <FamilyTree familyMembers={familyMembers} />
    </div>
  );
};

export default App;