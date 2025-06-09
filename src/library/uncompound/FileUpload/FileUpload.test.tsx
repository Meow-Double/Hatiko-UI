import { render } from '@testing-library/react';
import { vitest } from 'vitest';

import { FileUpload, FILEUPLOAD_TEST_IDS, FileUploadProps } from './FileUpload';

const fileUploadProps = {
  getFiles: vitest.fn()
} satisfies FileUploadProps;



describe("FileUpload", () => {
    test("should render component", () => {
        const {getByTestId} = render(<FileUpload {...fileUploadProps}/>);

        const fileUpload = getByTestId(FILEUPLOAD_TEST_IDS.FILEUPLOAD);

        expect(fileUpload).toBeInTheDocument();
    })
})

describe("FileUpload className", () => {
    test("should has className when provided", () => {
        const {getByTestId} = render(<FileUpload {...fileUploadProps} className='fileupload_className'/>);

        const fileUploadButton = getByTestId(FILEUPLOAD_TEST_IDS.BUTTON);

        expect(fileUploadButton).toHaveClass("fileupload_className");
    })
})