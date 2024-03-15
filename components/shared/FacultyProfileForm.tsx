"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { facultyProfileFormSchema } from "@/lib/validator"
import { z } from "zod"
import { createFacultyProfile, createUserProfile } from "@/lib/actions/user.actions"
import { IEvent } from "@/lib/database/models/profile.model"

type UserProps = {
    dbUserId: string
    username: string
    profile?:IEvent
}

const ProfileForm = ({ dbUserId, username,profile} : UserProps) => {
  const form = useForm<z.infer<typeof facultyProfileFormSchema>>({
    resolver: zodResolver(facultyProfileFormSchema),
    defaultValues: {
      username: profile?.username,
      uniqId:profile?.uniqId,
      full_name:profile?.full_name,
     
      state: profile?.state,    
      nationality: profile?.nationality,   
      religion: profile?.religion,    
   
      present_address: profile?.present_address,    
      pin_code: profile?.pin_code,    
      permanent_address: profile?.permanent_address,

    },
  })
 
  async function onSubmit(values: z.infer<typeof facultyProfileFormSchema>) {
    try {
      // Append dbUserId and username to the form data
      const userProfileData = {
        ...values,
        dbUserId: dbUserId,
        username: username,
      };

      // Call createUserProfile function and pass the form data
      const result = await createFacultyProfile(userProfileData);
      window.location.href = '/facultyProfile';

      console.log("User profile created:", result);
    } catch (error) {
      console.error('Error creating user profile:', error);
    }
  }

  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="uniqId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unique ID</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>full_name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         
          <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>state</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
            <FormField
          control={form.control}
          name="nationality"
          render={({ field }) => (
            <FormItem>
              <FormLabel> nationality</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="religion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>religion</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
           
         <FormField
          control={form.control}
          name="present_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel> present_address</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pin_code"
          render={({ field }) => (
            <FormItem>
              <FormLabel> pin_code</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="permanent_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel> permanent_address</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
      
    </>
  )
}

export default ProfileForm
