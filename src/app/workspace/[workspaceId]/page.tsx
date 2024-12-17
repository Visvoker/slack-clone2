interface workspaceIdPageProps {
  params: {
    workspaceId: string;
  }
};

const workspaceIdPage = ({ params }: workspaceIdPageProps) => {
  return (
    <div>
      ID:{params.workspaceId}
    </div>
  );
}

export default workspaceIdPage;