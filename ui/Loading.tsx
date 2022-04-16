import {
  Spinner,
  Stack,
  AlertDialog,
  AlertDialogContent,
} from '@chakra-ui/react';

export type LoadingProps = {
  fullScreen?: boolean;
  wrappedInDialog?: boolean;
  size?: string;
};

const Loading = ({
  fullScreen,
  wrappedInDialog,
  size = 'xl',
}: LoadingProps) => {
  const progress = (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size={size}
    />
  );

  if (fullScreen) {
    return <Stack>{progress}</Stack>;
  }

  if (wrappedInDialog) {
    return (
      <AlertDialog isOpen={true}>
        <AlertDialogContent>{progress}</AlertDialogContent>
      </AlertDialog>
    );
  }

  return progress;
};

export default Loading;
