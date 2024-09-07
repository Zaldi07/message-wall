"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {GiSelfLove} from "react-icons/gi";
import {IoIosSend} from "react-icons/io";
import {IoSend} from "react-icons/io5";

import localFont from "next/font/local";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Home() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div
      className={`font-[family-name:var(--font-geist-mono) grid grid-rows-[20px_1fr_20px] items-center justify-items-center max-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-3 row-start-2 items-center sm:items-start">
        <Image className="dark:invert" src="/message.svg" alt="Next.js logo" width={300} height={200} priority />
        <p className=" text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">Save and see your changes instantly.</p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
            <FormField
              control={form.control}
              name="message"
              render={({field}) => (
                <FormItem>
                  {/* <FormLabel>Message</FormLabel> */}
                  <FormControl>
                    <Textarea {...field} placeholder="Type your message here." id="message-2" />
                  </FormControl>
                  <FormDescription>This is your message.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full flex gap-2 items-center justify-center">
              Submit <IoIosSend className="text-xl" />
            </Button>
          </form>
        </Form>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GiSelfLove />
          zaldinugraha
        </a>
      </footer>
    </div>
  );
}
