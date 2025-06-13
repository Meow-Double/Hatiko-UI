import { CSSProperties, ReactNode } from 'react';
import clsx from 'clsx';

import { ProgressbarProvider } from './context/ProgressbarProvider';
import { useProgressbarContext } from './context/useProgressbarContext';

import styles from './Progressbar.module.css';

interface ProgressbarProps {
  children: ReactNode;
  progress: number;
  className?: string;
}

export const Progressbar = ({ children, progress, className }: ProgressbarProps) => {
  return (
    <ProgressbarProvider values={{ progress }}>
      <div className={clsx(styles.bar, className)}>{children}</div>;
    </ProgressbarProvider>
  );
};

interface InfoWrapperProps {
  children: ReactNode;
  className?: string;
}

Progressbar.InfoWrapper = ({ children, className }: InfoWrapperProps) => {
  return <div className={clsx(styles.info, className)}>{children}</div>;
};

interface ProgressbarLine {
  className?: string;
}

Progressbar.Line = ({ className }: ProgressbarLine) => {
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

Progressbar.Title = ({ title, className }: ProgressbarTitleProps) => {
  return <div className={className}>{title}</div>;
};

interface ProgressbarPercentProps {
  className?: string;
}

Progressbar.Percent = ({ className }: ProgressbarPercentProps) => {
  const { progress } = useProgressbarContext();
  return <div className={className}>{progress}%</div>;
};