import * as React from 'react';
import{ Fragment } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useField } from 'formik';

export const RichText = ({ name, height, createAsset, getAssetUrl }) => {
  const [field, meta, helpers] = useField({ name });
  return (
    <Fragment>
      <Editor
        apiKey="dr7mskwzeoucqvh3i9s1xj2pdym6qtkdjgviaxrm8mobg69p"
        initialValue={field.value}
        init={{
          height: height || 500,
          menubar: false,
          images_upload_handler: function (blobInfo, success) {
            createAsset({ file: blobInfo.blob() }).then((res) =>
              success(getAssetUrl(res.data.key))
            );
          },
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime imagetools media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
        alignleft aligncenter alignright alignjustify | \
        bullist numlist outdent indent | removeformat | link image | help',
        }}
        onEditorChange={(value) => helpers.setValue(value)}
      />
      <p>{meta.error}</p>
    </Fragment>
  );
};
