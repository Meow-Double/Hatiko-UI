import React, { ComponentProps } from 'react';
import clsx from 'clsx';

import styles from './Linkify.module.css';

interface LinkifyProps extends ComponentProps<'a'> {
  children: string;
}

// Проверка протокола (http, https)
const protocolPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?/i;

// Проверка основного домена
const domainPattern = /^[a-z0-9]+([-.]?[a-z0-9]+)*$/i;


// Проверка домена верхнего уровня (TLD) или localhost
const tldOrLocalhostPattern = /^(\.[a-z]{2,5}|localhost)$/i;

// Проверка порта (если указан)
const portPattern = /^(:[0-9]{1,5})?$/;

// Проверка пути (если указан)
const pathPattern = /^(\/.*)?$/;

// Основная функция проверки URL
const isUrl = (url: string): boolean => {
  const parts = url.match(/([^/:]+)(:\d+)?(\/.*)?$/); // Разбиваем URL на части

  if (!parts) return false; // Если структура неверная

  const [domain, port, path] = parts;

  return (
    protocolPattern.test(url) &&
    domainPattern.test(domain) &&
    tldOrLocalhostPattern.test(domain) &&
    (!port || portPattern.test(port)) &&
    (!path || pathPattern.test(path))
  );
};

export const Linkify = (props: LinkifyProps) => {
  const { children, className, ...otherProps } = props;

  const words = children.split(' ');

  const addMarkup = (word: string) => {
    return isUrl(word) ? (
      <a href={word} className={clsx(styles.link, className)} {...otherProps}>
        {word}
      </a>
    ) : (
      word
    );
  };

  const formattedWords = words.map((word) => (
    <React.Fragment key={word}>{addMarkup(word)} </React.Fragment>
  ));

  return <div className={styles.inner}>{formattedWords}</div>;
};