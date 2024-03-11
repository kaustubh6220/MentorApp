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
import { profileFormSchema } from "@/lib/validator"
import { z } from "zod"
import { createUserProfile } from "@/lib/actions/user.actions"
import { IEvent } from "@/lib/database/models/profile.model"

type UserProps = {
    dbUserId: string
    username: string
    profile?:IEvent
}

const ProfileForm = ({ dbUserId, username,profile} : UserProps) => {
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: profile?.username,
      full_name:profile?.full_name,
      year_of_admission:profile?.year_of_admission,  
      class: profile?.class,       
      birth_place: profile?.birth_place,    
      state: profile?.state,    
      nationality: profile?.nationality,   
      religion: profile?.religion,    
      father_name: profile?.father_name,    
      occupation: profile?.occupation,    
      parents_mobile: profile?.parents_mobile,   
      guardian_name: profile?.guardian_name,    
      address: profile?.address,    
      guardian_profession: profile?.guardian_profession,    
      guardian_mobile_number: profile?.guardian_mobile_number,    
      relation: profile?.relation,    
      annual_income: profile?.annual_income,    
      present_address: profile?.present_address,    
      pin_code: profile?.pin_code,    
      permanent_address: profile?.permanent_address,
      mentor_id:profile?.mentor_id,   
      mentor_name: profile?.mentor_name,    
      batch:profile?.batch,
    },
  })
 
  async function onSubmit(values: z.infer<typeof profileFormSchema>) {
    try {
      // Append dbUserId and username to the form data
      const userProfileData = {
        ...values,
        dbUserId: dbUserId,
        username: username,
      };

      // Call createUserProfile function and pass the form data
      const result = await createUserProfile(userProfileData);
      window.location.href = '/personalProfile';

      console.log("User profile created:", result);
    } catch (error) {
      console.error('Error creating user profile:', error);
      // Handle error as needed
    }
  }
  // const handleUpdateClick = () => {
    
  //       window.location.href = '/personalProfile';
    
  // };
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
          name="year_of_admission"
          render={({ field }) => (
            <FormItem>
              <FormLabel> year_of_admission</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="class"
          render={({ field }) => (
            <FormItem>
              <FormLabel>class </FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="birth_place"
          render={({ field }) => (
            <FormItem>
              <FormLabel> birth_place</FormLabel>
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
          name="father_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>father_name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="occupation"
          render={({ field }) => (
            <FormItem>
              <FormLabel> occupation</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="parents_mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>parents_mobile</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="guardian_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>guardian_name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>address</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="guardian_profession"
          render={({ field }) => (
            <FormItem>
              <FormLabel> guardian_profession</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="guardian_mobile_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>guardian_mobile_number</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="relation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>relation</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="annual_income"
          render={({ field }) => (
            <FormItem>
              <FormLabel>annual_income</FormLabel>
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
        <FormField
          control={form.control}
          name="mentor_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel> mentor_id</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="mentor_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>mentor_name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="batch"
          render={({ field }) => (
            <FormItem>
              <FormLabel> batch</FormLabel>
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
