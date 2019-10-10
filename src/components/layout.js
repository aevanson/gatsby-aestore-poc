import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";

export default ({ children }) => {
	const data = useStaticQuery(
		graphql`
		query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	);
	return (
		<>
			<header>
				<Link to={`/`}>
					{data.site.siteMetadata.title}
				</Link>
				<Link to={`/plp/`}>PLP</Link>
			</header>
			<main>
				{children}
			</main>
			<footer>This is a footer</footer>
		</>
	);
};
