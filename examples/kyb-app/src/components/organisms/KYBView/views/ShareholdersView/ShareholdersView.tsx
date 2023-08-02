import { DynamicForm } from '@app/common/components/organisms/DynamicForm';
import { useViewState } from '@app/common/providers/ViewStateProvider';
import { AppShell } from '@app/components/layouts/AppShell';
import { useCallback } from 'react';
import { shareholdersSchema } from './shareholders.schema';
import { ViewHeader } from '@app/components/organisms/KYBView/components/ViewHeader';
import { UBOSContext, WorkflowFlowData } from '@app/domains/workflows/flow-data.type';
import { FinalView } from '@app/components/organisms/KYBView/views/ShareholdersView/components/FinalView';
import { shareholdersUISchema } from '@app/components/organisms/KYBView/views/ShareholdersView/shareholders.ui-schema';

export const ShareholdersView = () => {
  const { context, state, isFinished, save, finish } = useViewState<WorkflowFlowData>();

  const handleSubmit = useCallback(
    (values: UBOSContext[]) => {
      void save(values).then(finalContext => {
        finish(finalContext);
      });
    },
    [save, finish],
  );

  return !isFinished ? (
    <AppShell.FormContainer header={<ViewHeader />}>
      <DynamicForm<UBOSContext[]>
        className="max-w-[384px]"
        schema={shareholdersSchema}
        uiSchema={shareholdersUISchema}
        formData={(context.flowData[state] as UBOSContext[]) || []}
        onSubmit={values => handleSubmit(values)}
      />
    </AppShell.FormContainer>
  ) : (
    <FinalView />
  );
};
