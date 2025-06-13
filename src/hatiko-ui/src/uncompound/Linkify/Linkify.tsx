import styles from './Linkify.module.css';

export interface LinkifyProps {
  children: string;
}

export const LINKIFY_TEST_IDS = {
  WRAPPER:"linkify-wrapper",
  LINK:"linkify-link"
}

export const Linkify = ({ children }: LinkifyProps) => {

  const linkReg = new RegExp(/(https?:\/\/[^\s]+)/g)

  const links: string[] = children.match(linkReg) || [];

  const changedText = children.split(linkReg).map((part) =>
    links.includes(part) ? (
      <a 
      key={part} 
      href={part} 
      className={styles.link} 
      target="_blank" 
      data-testid={LINKIFY_TEST_IDS.LINK} rel="noreferrer"
      >
        {part}
      </a>
    ) : (
      part
    )
  );

  return <div className={styles.inner} data-testid={LINKIFY_TEST_IDS.WRAPPER}>{changedText}</div>;
};
