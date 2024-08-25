import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fullstack Engineer',
    Svg: require('@site/static/img/computer.svg').default,
    description: (
      <>
        <p>Languages I speak: Javascript, Typescript, Java, C#, SQL</p>
        <p>
          Tools I use: VS Code, React, Material UI, Redux, git, Node, ESLint,
          .NET Core, .NET Framework
        </p>
      </>
    ),
  },
  {
    title: 'Cloud knowledge',
    Svg: require('@site/static/img/cloud.svg').default,
    description: (
      <>
        I've worked with multiple AWS tools including: EC2, Lambdas, API
        Gateway, SQS, SNS, EventBridge, Cognito and DynamoDB
      </>
    ),
  },
  {
    title: 'Experience',
    Svg: require('@site/static/img/terminal.svg').default,
    description: (
      <>
        9 years of professional experience and a Bachelor Degree in Computer
        Science
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
