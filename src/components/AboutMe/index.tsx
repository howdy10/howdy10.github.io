import styles from './styles.module.css';

export default function AboutMe(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--3" />
          <div className="col col--6">
            <b>Howdy! I’m Esaul.</b>
            <p>
              I’m a software engineer based in the Phoenix area who loves a good
              challenge. I don’t just write code—I engineer solutions to solve
              problems (with code). While I have a strong foundation in certain
              technologies, I’m always eager to dive into unknown technologies
              and learn new tools and frameworks. I’m driven by a love for
              problem-solving and a commitment to delivering results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
