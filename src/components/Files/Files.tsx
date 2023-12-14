import React, { useEffect, useState } from "react";
import Input from "../generic/Input";
import "./Files.scss";
import { generateRandomString, getFileType } from "../../utils/Index";

type FilesProps = {
  isMultipleUpload?: boolean;
  maximumFiles?: number;
  maxOutError?: string;
  shouldPreview?: boolean;
  placeholder?: string;
};

const Files = ({
  maximumFiles = 1,
  maxOutError = `Maximum ${maximumFiles} files allowed`,
  shouldPreview = false,
  isMultipleUpload = false,
  placeholder,
}: FilesProps) => {
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);
  const [isFilesThere, setIsFilesThere] = useState<boolean>(false);
  const [previewEnable, setPreviewEnable] = useState<boolean>(false);
  const [maxError, setMaxError] = useState<string>("");

  const onFileChange = (event: any) => {
    const f = event?.target?.files || undefined;
    if (f?.length) {
      if (f?.length > maximumFiles || selectedFiles?.length >= maximumFiles) {
        setMaxError(maxOutError);
        return;
      }
      setMaxError("");
      for (let i = 0; i < f?.length; i++) {
        const id = generateRandomString(16);
        const type = getFileType(event.target.files[i]);
        const name = event?.target?.files[i]?.name;
        const size = event?.target?.files[i]?.size;
        const file = {
          path: URL.createObjectURL(event.target.files[i]),
          type,
          name,
          id,
          size,
        };

        isMultipleUpload
          ? setSelectedFiles((prev) => [...prev, file])
          : setSelectedFiles([file]);
      }
    }
  };

  const removeFile = (e: any) => {
    setSelectedFiles(selectedFiles.filter((fil) => fil?.id !== e));
    if (selectedFiles?.length > 0) {
      setMaxError("");
    }
    selectedFiles?.length === 0 && setIsFilesThere(false);
  };

  useEffect(() => {
    setIsFilesThere(selectedFiles?.length ? true : false);
  }, [selectedFiles, removeFile]);

  const preview = () => {
    setPreviewEnable((prev) => (prev === true ? false : true));
  };

  const previewFiles = selectedFiles.map((file, i) => {
    return (
      <div className="file-prev-container">
        <button onClick={() => removeFile(file?.id)} className="btn-remove">
          x
        </button>
        <div style={{ textAlign: "center" }} className="file">
          {file?.type === "image" ? (
            <img src={file?.path} />
          ) : (
            <div className="default-file-icon">&#9926;</div>
          )}
        </div>
        <div data-tooltip={file?.name} className="file-name">
          {file?.name}
        </div>
        <div>{file?.size}</div>
      </div>
    );
  });

  return (
    <>
      <div className="drag-drop-container">
        <div className="input-container-file">
          <Input
            type="file"
            value={""}
            onchangeHandler={onFileChange}
            multiple={isMultipleUpload}
          />
          {placeholder ? (
            placeholder
          ) : (
            <h4>Select / Drag {isMultipleUpload ? "files" : "file"} here</h4>
          )}
        </div>
        <div>
          {isFilesThere && "Files loaded"}
          {maxError && <p>{maxError}</p>}
          {shouldPreview && isFilesThere && (
            <button onClick={preview}>
              {!previewEnable
                ? `Preview ${isMultipleUpload ? "files" : "file"}`
                : `Hide Preview`}
            </button>
          )}
        </div>
        <div></div>
        {shouldPreview && previewEnable && (
          <div className="preview-panel-files" style={{ maxHeight: "300px" }}>
            {previewFiles}
          </div>
        )}
      </div>
    </>
  );
};

export default Files;
