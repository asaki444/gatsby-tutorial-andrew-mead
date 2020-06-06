import React from 'react';
import Layout from '../components/Layout';
import resume from '../images/resume.pdf'
import resumeStyles from './resume.module.scss';

const Resume = () =>  {
    
 return(
 <Layout>
    <iframe src={resume} className={resumeStyles.resume_container}>
      This browser does not support PDFs. Please download the PDF to view it: Download PDF
    </iframe>
</Layout>
 )   
}

export default Resume;