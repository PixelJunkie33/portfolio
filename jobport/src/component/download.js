import React from 'react';

function FileDownload() {
  const downloadFile = () => {
    const url = 'https://drive.google.com/file/d/1UN-jWnrADXCWlBn52hbGCTsF79YQQlIz/view?usp=share_link'; // Replace with the URL of the file to download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Kadeem_Pratt_Resume.pdf'; // Replace with the name you want the file to have
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button id='fdRes' onClick={downloadFile} type="button" class="btn btn-primary" data-toggle="tooltip" title='Download Resume' >Download Complete Resume</button>
  );
}

export default FileDownload;
