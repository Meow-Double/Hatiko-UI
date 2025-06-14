import { CSSProperties, ReactNode } from 'react';
import clsx from 'clsx';

import { ProgressbarProvider } from './context/ProgressbarProvider';
import { useProgressbarContext } from './context/useProgressbarContext';

import styles from './Progressbar.module.css';

interface ProgressbarCompoundProps {
  children: ReactNode;
  progress: number;
  className?: string;
}

export const ProgressbarCompound = ({ children, progress, className }: ProgressbarCompoundProps) => {
  return (
    <ProgressbarProvider values={{ progress }}>
      <div className={clsx(styles.bar, className)}>{children}</div>;
    </ProgressbarProvider>
  );
};

interface ProgressbarInfoGrouopProps {
  children: ReactNode;
  className?: string;
}

export const ProgressbarInfoGrouop = ({ children, className }: ProgressbarInfoGrouopProps) => {
  return <div className={clsx(styles.info, className)}>{children}</div>;
};

interface ProgressbarLine {
  className?: string;
}

export const ProgressbarLine = ({ className }: ProgressbarLine) => {
  const { progress } = useProgressbarContext();

  const progressStyles: CSSProperties & Record<string, string> = {
    '--progress-width': `${progress}%`
  };

  return (
    <div className={clsx(styles.progress, className)}>
      <span className={styles.line} style={progressStyles} />
    </div>
  );
};

interface ProgressbarTitleProps {
  title: ReactNode;
  className?: string;
}

export const ProgressbarTitle = ({ title, className }: ProgressbarTitleProps) => {
  return <div className={className}>{title}</div>;
};

interface ProgressbarPercentProps {
  className?: string;
}

export const ProgressbarPercent = ({ className }: ProgressbarPercentProps) => {
  const { progress } = useProgressbarContext();
  return <div className={className}>{progress}%</div>;
};



ProgressbarCompound.displayName = "ProgressbarCompound"
ProgressbarInfoGrouop.displayName = "ProgressbarInfoGrouop"
ProgressbarLine.displayName = "ProgressbarLine"
ProgressbarTitle.displayName = "ProgressbarTitle"
ProgressbarPercent.displayName = "ProgressbarPercent"