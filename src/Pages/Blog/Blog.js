import React from 'react';
import './Blog.css'

const Blog = () => {
    return (

        <div className='Question-Container'>
            <div className="question">
                <h2 className='text-2xl p-1' >Difference between Javascript and Node.js</h2>
                <p className='ans text-xl px-2 pt-3 fs-5'> <span className='text-2xl'>Ans:</span> Javascript is a scripting language. It only runs in the browser. Javascript has the capability of using html and play with DOM. On the other hand Node.js is a javascript runtime environment. It makes possible to use javascript in server side. Node.js mostly used to develop backend side of a website.</p>
            </div>
            <div className="question">
                <h2 className='text-2xl p-1'>Differences between 'sql' and 'nosql' databases.</h2>
                <p className='ans text-xl px-2 pt-3 fs-5'><span className='text-2xl' >Ans:</span> SQL database is relational database system. Sql follows specific schema or structure. It is suitable for complex and large amount of data. On the other hand noSql data is not relational database system. It is flexible than sql database system . Nosql database system follows horizontal alignment of data.</p>
            </div>
            <div className="question">
                <h2 className='text-2xl p-1'>What is the purpose of 'jwt' and how does it work? </h2>
                <p className='ans text-xl px-2 pt-3 fs-5'><span className='text-2xl '>Ans: </span> JWT is a token based stateless authentication mechanism. It is a client-side based stateless session. That is why server doesn't have to completely rely on a datastore(database) to save session information. At first client send a request to the server server create a token for specific user. When the client send request using the token client is being verified and get access to the server for getting requested data. </p>
            </div>
        </div>
    );
};

export default Blog;