import React from 'react';

const Transport = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    color: '#333',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#074E9B',
    marginBottom: '40px',
  };

  const sectionStyle = {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '40px',
    padding: '20px',
  };

  const sectionTitleStyle = {
    fontSize: '28px',
    color: '#074E9B',
    marginBottom: '20px',
  };

  const schemaStyle = {
    backgroundColor: '#eef1f7',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Transport</h1>
      
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Schéma 1</h2>
        <div style={schemaStyle}>
          <p>Contenu du Schéma 1</p>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Schéma 2</h2>
        <div style={schemaStyle}>
          <p>Contenu du Schéma 2</p>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Schéma 3</h2>
        <div style={schemaStyle}>
          <p>Contenu du Schéma 3</p>
        </div>
      </div>

      
    </div>
  );
};

export default Transport;
