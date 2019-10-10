import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default (props) => {
	const data = props.data.allFile.edges[0].node.childMarkdownRemark;
	return (
		<Layout>
			<section>
				<div className="container">
					<h1>{data.frontmatter.title}</h1>
					<p className="hero__subhead" dangerouslySetInnerHTML={{ __html: data.frontmatter.intro }} />
				</div>
			</section>
			<div className="container" dangerouslySetInnerHTML={{ __html: data.html }} />
		</Layout>
	)
};

export const query = graphql`
	query {
		allFile(filter: {sourceInstanceName: {eq: "content"}, name: {eq: "about"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              contentsHeading
            }
            html
          }
        }
      }
    }
	}
`
