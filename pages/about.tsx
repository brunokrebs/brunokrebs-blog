import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";

const About: NextPage = () => {
  return (
    <>
      <Page
        title="About"
        description="Hi, I'm Bruno. I hope you enjoyed the content so far."
      >
        <Prose>
          <p>
            Seasoned Full-Stack Developer and tech-enthusiast with a versatile career trajectory.
            As a T-shaped professional, my expertise spans across a broad spectrum of technologies
            while delving deep into specific areas to deliver comprehensive solutions.
          </p>
          <p>
            My toolbelt consists of frontend technologies (like React, AngularJS, and even jQuery),
            backend frameworks (Node.js, NestJS, Spring), along with specialized tools such as
            Apache Solr for search engine implementation, Linux for system configuration and scripting,
            ABAP during my tenure at SAP, PostGIS for managing spatial data, among others.
          </p>
          <p>
            In addition to individual contributions, I take pride in fostering a collaborative and
            learning-oriented environment that nurtures career growth for my peers. I am a strong advocate
            of optimizing the developer experience (DX) to boost productivity and enhance the software
            delivery process. As such, I believe in the power of continuous integration (CI),
            test-driven development (TDD), automated testing, hot reloading, and type checking to
            ensure high-quality and rapid outcomes.
          </p>
          <p>
            I continually strive to stay ahead of the curve by embracing the most efficient tools
            and methodologies, a testament to my passion for technology and constant learning.
          </p>
        </Prose>
      </Page>
    </>
  );
};

export default About;
