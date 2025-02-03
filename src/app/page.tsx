"use client"

import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";
import { Loader } from "lucide-react";

export default function Home() {
  const router = useRouter();

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [open, setOpen] = useCreateWorkspaceModal();

  const { data, isLoading } = useGetWorkspaces();

  const workspaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workspaceId) {
      router.replace(`/workspace/${workspaceId}`);
    } else {
      setOpen(true);
    }
  }, [isLoading, workspaceId, router, setOpen]);

  return (
    <div className="h-full flex items-center justify-center">
      <Loader className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
}