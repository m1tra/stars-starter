import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Email() {
  return (
    <div className="w-full space-y-3 pb-5">
        <Input placeholder="example@company.ru"  className=''/>
        <Button className={cn("w-full")} variant={"ghost"} >Войти через email</Button>
    </div>
  )
}