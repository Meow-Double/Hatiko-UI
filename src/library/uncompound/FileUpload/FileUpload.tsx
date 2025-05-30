import { ChangeEvent, DragEvent, useRef, useState } from 'react';
import clsx from 'clsx';

import styles from './FileUpload.module.css';

export interface FileUploadProps {
  getFiles: (files: File[]) => void;
  className?: string;
  fileAccept?: string;
}

export const FileUpload = (props: FileUploadProps) => {
  const { getFiles, className, fileAccept } = props;

  const [drag, setDrag] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const dragStartHandler = (e: DragEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (e: DragEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (e: DragEvent<HTMLSpanElement>) => {
    e.preventDefault();
    const files = [...e.dataTransfer.files];
    setFiles(files);
    getFiles(files);

    setDrag(false);
  };

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      setFiles([]);
      getFiles([]);
    } else {
      setFiles([...files]);
      getFiles([...files]);
    }
  };

  const onLoadFile = () => {
    inputRef.current?.click();
  };

  return (
    <div>
      <input
        className={styles.input}
        accept={fileAccept}
        onChange={onChangeFile}
        ref={inputRef}
        type='file'
        multiple
      />
      <button
        className={clsx(styles.btn_upload, className, { [styles.active]: drag })}
        onClick={onLoadFile}
        onDragStart={(e) => dragStartHandler(e)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragOver={(e) => dragStartHandler(e)}
        onDrop={(e) => onDropHandler(e)}
      >
        {files.length > 0
          ? drag
            ? 'Отпустите файлы, чтобы загрузить их'
            : `Было выбрано файлов: ${files.length}`
          : 'Выберите или перетащите файлы'}
      </button>
    </div>
  );
};