import React from 'React';
import Layout from '../components/Layout';
import blogStyles from './blog.module.scss';


const Contact = ()=>{
    return (
        <Layout>
        <div>
            <h1>
                Let's Connect!
            </h1>
            <p className={blogStyles.post}>
               Tweet me: <a href="https://twitter.com/AditiDevelops">AditiDevelops</a>
            </p>
            <p className={blogStyles.post}>
                Send a connect request:  <a href="https://www.linkedin.com/in/aditigreen/">https://www.linkedin.com/in/aditigreen/</a>
             </p>
             <p className={blogStyles.post}>
                 Shoot  me an email: <a href="mailto:aditidevelops@gmail.com">aditidevelops@gmail.com</a>
             </p>
        </div>
        </Layout>   
    )
}

export default Contact;