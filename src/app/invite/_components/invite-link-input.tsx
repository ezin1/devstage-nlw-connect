import { IconButton } from "@/app/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/app/components/input";
import { Copy, Link } from "lucide-react";

export function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField readOnly defaultValue="https://github.com/ezin1" />
      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
