"use client";

import { Button } from "../../_components/Button";

export function LoginForm() {
  return (
    <form className="flex flex-col gap-4">
      <input type="email" placeholder="Email" className="rounded border px-3 py-2" />
      <input type="password" placeholder="Password" className="rounded border px-3 py-2" />
      <Button type="submit" className="rounded bg-foreground px-4 py-2 text-background">
        Login
      </Button>
    </form>
  );
}
