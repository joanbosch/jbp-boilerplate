"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader } from "lucide-react"
import { signIn } from 'next-auth/react';
import { useSearchParams } from "next/navigation"
import config from "@/config"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
 
const formSchema = z.object({
  email: z.string().email(),
})

export default function NodemailerSignIn() {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const serachParams = useSearchParams()
  const callbackUrl = serachParams.get("callbackUrl") || config.auth.callbackUrl

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    signIn('nodemailer', { email: values.email, callbackUrl })
    setIsLoading(false)
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    }
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only" htmlFor="email">Username</FormLabel>
                  <FormControl>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    {...field}
                  />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Loader className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
    </Form>
  )
}
