import { Button } from "@/app/components/button";
import { InputField, InputIcon, InputRoot } from "@/app/components/input";
import { ArrowRight, Mail, User } from "lucide-react";

export function SubscriptionForm() {
  return (
    <form
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
      action=""
    >
      <h2 className="text-xl text-gray-200 font-heading font-semibold">
        Inscrição
      </h2>
      <div className="space-y-3">
        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField type="text" placeholder="Nome completo" />
        </InputRoot>

        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField type="email" placeholder="E-mail" />
        </InputRoot>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  );
}
