import { DynamicForm } from '@app/common/components/organisms/DynamicForm';
import { useViewState } from '@app/common/providers/ViewStateProvider';
import { AppShell } from '@app/components/layouts/AppShell';
import { DocumentsContext, KYBContext } from '@app/components/organisms/KYBView/types';
import { formSchema } from '@app/components/organisms/KYBView/views/DocumentsView/form.schema';
import { useCallback } from 'react';

export const DocumentsView = () => {
  const { context, state, update, saveAndPerformTransition } = useViewState<KYBContext>();

  const handleSubmit = useCallback(
    (values: DocumentsContext) => {
      saveAndPerformTransition(values);
    },
    [saveAndPerformTransition],
  );

  return (
    <AppShell.FormContainer>
      <DynamicForm<DocumentsContext>
        className="max-w-[384px]"
        schema={formSchema}
        formData={context[state] as DocumentsContext}
        uiSchema={{
          registrationCertificate: {
            'ui:field': 'FileInput',
          },
          addressProof: {
            'ui:field': 'FileInput',
          },
        }}
        onChange={update}
        onSubmit={values => {
          void handleSubmit(values);
        }}
      />
    </AppShell.FormContainer>
  );
};
