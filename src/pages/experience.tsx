import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

type ExperienceItem = {
  position: string;
  company: string;
  start: Date;
  end?: Date;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const ExperienceList: ExperienceItem[] = [
  {
    position: 'PayGround',
    company: 'Software Engineer',
    start: new Date(2023, 10),
    description: (
      <>
        At PayGround I was part of maintaining a serverless Architecture using
        AWS. This involved Lambda functions, API Gateway, SQS, SNS, DynamoDB and
        many others. Infrastructure as Code was used through AWS Cloud
        Development Kit. Meaningful contribution involved building Dead Letter
        Queue automatic reprocessing and monitoring. Also multiple architecture
        diagrams, system dashboards, and overall documentation of the
        application.
      </>
    ),
  },
  {
    position: 'Sr. Software Developer',
    company: 'General Motors',
    start: new Date(2021, 9),
    end: new Date(2023, 9),
    description: (
      <>
        At General Motors I was part of managing a global Demand Planning
        (Forecasting) and Replenishment Planning (Orders) application
        responsible for 100 million worth of weekly orders. Responsibilities
        included production support and promptly addressing issues through an on
        call rotation.
      </>
    ),
  },
  {
    position: 'Senior Consultant',
    company: 'Deloitte',
    start: new Date(2020, 7),
    end: new Date(2021, 9),
    description: (
      <>
        At Deloitte I was part of building the internal mETL application from
        scratch. The application would use OCR to scan multiple documents from a
        user and build a profile with all the available information. The front
        end was developed with React, Material UI for styling, and Redux for
        state management. The back end was developed in .NET, using C#. GraphQL
        was set up using ChilliCream Hot chocolate. Being part of leading this
        new application came with mentoring 4 Junior developers.
      </>
    ),
  },
  {
    position: 'Associate Consultant',
    company: 'Valore Partners',
    start: new Date(2019, 7),
    end: new Date(2020, 7),
    description: (
      <>
        At Valore Partners I developed a event-based server-less system that was
        in charge of migrating data between on-prem oracle databases. Using
        Database triggers events were published to a Azure Event grid, and a
        Azure function written in .NET Core/C#. Being a contract role I wrote
        detailed technical documentation for easily maintainability.
      </>
    ),
  },
  {
    position: 'Software Developer',
    company: 'General Motors',
    start: new Date(2015, 5),
    end: new Date(2019, 7),
    description: (
      <>
        At General Motors I was part of building and maintaining the Shop Click
        Drive application. Shop Click Drive introduced a simple way to purchase
        or lease a vehicle online. Using C# and the .NET Framework I delivered
        multiple RESTful API services. My biggest contribution was a queue based
        system for processing over 30,000 of user entries per day, along with
        building internal tools for the monitoring and debugging of the system.
      </>
    ),
  },
  {
    position: 'Programer',
    company: 'Socorro ISD',
    start: new Date(2015, 0),
    end: new Date(2015, 5),
    description: (
      <>
        At Socorro Independent School District I was task in the design and
        start of an asset inventory application. This involved creating a
        database schema for MySQL, and a start to a web application using PHP.
      </>
    ),
  },
];

const ExperienceSection = ({
  position,
  company,
  Svg,
  description,
  start,
  end,
}: ExperienceItem) => {
  return (
    <div className={clsx('col col--12')}>
      <hr />
      {Svg && (
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col col--3">
            <div className="text--center padding-horiz--md">
              <Heading as="h3">
                {position} @ {company}
              </Heading>
            </div>
            <div className="text--center padding-horiz--md">
              {monthNames[start.getMonth()] + ' ' + start.getFullYear()} -{' '}
              {end
                ? monthNames[end.getMonth()] + ' ' + end.getFullYear()
                : 'Present'}
            </div>
          </div>
          <div className="col col--9">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function page() {
  return (
    <Layout
      title="Esaul Experience"
      description="A history of my work experience"
    >
      <Heading
        as="h1"
        className="container hero__title padding-top--lg text--center"
      >
        Work Experience
      </Heading>
      <div className="container padding-top--md padding-bottom--lg">
        <div className="row padding-bottom--md">
          {ExperienceList.map((props, idx) => (
            <ExperienceSection key={idx} {...props} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
