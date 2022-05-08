import React from 'react';

const Blogs = () => {
	return (
		<div className='m-6'>
			<h1 className='text-xl font-bold'>1.Difference between `javascript` and `nodejs`?</h1>
			<p><span className=' font-semibold'>Answer:</span>javascript is a programming language ,it is used for any client-side activity for a web application. <br />
			Nodejs is a interpreter and environment for javascript,it is used for accessing or performing any non-blocking operation of any operating system.</p>
			<h1 className='text-xl font-bold'>2.When should you use `nodejs` and when should you use `mongodb`?</h1>
			<p><span className=' font-semibold'>Answer:</span>NodeJs is used to build servers that can response to web request. <br />
			Mongodb is a database engine.many server uses in Mongodb to update data in a database.nodejs built server then this server request use Mongodb for storing updating data. </p>
			<h1 className='text-xl font-bold'>3.Differences between `sql` and `nosql` databases.?</h1>
			<p><span className=' font-semibold'>Answer:</span> SQL is a Relational Database,stores data in a table,good for structured data,strict schema,use structured query language for defining and manipulating the data. <br />
			NonSQL is a Non-relational database,stored data in JSON documents,key/values pair or graphs,good for semi-structured,dynamic schema,use unstructured query language.</p>
			<h1 className='text-xl font-bold'>4.What is the purpose of `jwt` and how does it work?</h1>
			<p><span className=' font-semibold'>Answer:</span> Jwt is standard method for representing claims securely between client and server.jwt use  cryptographic algorithm  to ensure generated token, An access token is a special key created as a result of a correct user identification. It contains encoded data that will be used after decoding.</p>
		</div>
	);
};

export default Blogs;