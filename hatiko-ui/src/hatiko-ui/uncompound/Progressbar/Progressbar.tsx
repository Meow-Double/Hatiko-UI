import { CSSProperties } from 'react';
import clsx from 'clsx';

import styles from './Progressbar.module.css';

export interface ProgressbarProps {
  progress: number;
  title?: string;
  displayProgress?: boolean;
}

export const PROGRESSBAR_TEST_IDS = {
  PROGRESSBAR: 'progressbar',
  TITLE_TEXT: 'progressbar-text',
  PROGRESS_TEXT: 'progressbar-text',
  PROGRESS_LINE: 'progressbar-line'
};

export const Progressbar = (props: ProgressbarProps) => {
  const { progress, title, displayProgress } = props;

  const progressStyles: CSSProperties & Record<string, string> = {
    '--progress-width': `${progress}%`
  };

  return (
    <div data-testid={PROGRESSBAR_TEST_IDS.PROGRESSBAR}>
      <div className={styles.info}>
        {!!title && <h2 data-testid={PROGRESSBAR_TEST_IDS.TITLE_TEXT}>{title}</h2>}
        {displayProgress && (
          <span data-testid={PROGRESSBAR_TEST_IDS.PROGRESS_TEXT}>{progress}%</span>
        )}
      </div>
      <div className={clsx(styles.progress)}>
        <span
          className={styles.line}
          style={progressStyles}
          data-testid={PROGRESSBAR_TEST_IDS.PROGRESS_LINE}
        />
      </div>
    </div>
  );
};
