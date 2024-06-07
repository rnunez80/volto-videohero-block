import React from 'react';
import { videoheroSchema } from './Schema';
import { BlockDataForm } from '@plone/volto/components';
import { useIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  videoheroBlock: {
    id: 'videohero Block',
    defaultMessage: 'videohero Block',
  },
});

const videoheroData = (props) => {
  const { data, block, onChangeBlock, schemaEnhancer } = props;
  const intl = useIntl();
  const schema = schemaEnhancer
    ? schemaEnhancer(videoheroSchema({ ...props, intl }), props)
    : videoheroSchema({ ...props, intl });

  return (
    <BlockDataForm
      schema={schema}
      title='Video Hero Block'
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      formData={data}
      fieldIndex={data.index}
      block={block}
    />
  );
};

export default videoheroData;
