// FamilyTree.js
import React from 'react';
import '../App.css'; // Import the CSS file

const getAttachmentStyleIcon = (attachmentStyle) => {
  // Map attachment styles to corresponding icons
  const styleToIcon = {
    secure: '🔒',
    anxious: '😰',
    avoidant: '🚫',
    'fearful-avoidant': '😨',
  };

  return styleToIcon[attachmentStyle] || '❓'; // Default to a question mark if not recognized
};

const FamilyTree = ({ familyMembers }) => {
  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      <ul>
        {familyMembers.map((member) => (
          <li key={member.id} className="family-member">
            <div className="member-box">
              <p className="member-name">{member.name}</p>
              <p>Attachment Style: {getAttachmentStyleIcon(member.attachmentStyle)}</p>
              <p>ASSI State: {member.assiState}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FamilyTree;
