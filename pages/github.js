import fetch from 'isomorphic-unfetch';

// https://medium.com/disdj/next-js-redux-in-an-easy-way-fae083aa037c

// Next.js do not support getInitialProps on subcomponents...

const GitHub = (props) =>
		<strong>
			<h1>Login: {props.login}</h1>
			<pre>{JSON.stringify(props, null, 2)}</pre>
		</strong>;

GitHub.getInitialProps = async (context) => {
	const res = await fetch('https://api.github.com/users/OzzyCzech');
	const data = await res.json();
	return { data };
};

export default GitHub;

