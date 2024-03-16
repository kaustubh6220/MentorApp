"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { profileFormSchema } from "@/lib/validator";
import { z } from "zod";
import { createUserProfile } from "@/lib/actions/user.actions";
import { IEvent } from "@/lib/database/models/profile.model";

type UserProps = {
  dbUserId: string;
  username: string;
  profile?: IEvent;
};

const ProfileForm = ({ dbUserId, username, profile }: UserProps) => {
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: profile?.username,
      uniqId: profile?.uniqId,
      full_name: profile?.full_name,
      year_of_admission: profile?.year_of_admission,
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
      mentor_id: profile?.mentor_id,
      mentor_name: profile?.mentor_name,
      batch: profile?.batch,
    },
  });

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

  return (
    <>
      <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    <table className="w-full">
      <tbody>
        <tr>
          <td className="font-bold">Username</td>
          <td>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <Input placeholder="Enter username" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Enrollment No</td>
          <td>
            <FormField
              control={form.control}
              name="uniqId"
              render={({ field }) => (
                <Input placeholder="Enter enrollment number" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Full Name</td>
          <td>
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <Input placeholder="Enter full name" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Year of Admission</td>
          <td>
            <FormField
              control={form.control}
              name="year_of_admission"
              render={({ field }) => (
                <Input placeholder="Enter year of admission" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Class</td>
          <td>
            <FormField
              control={form.control}
              name="class"
              render={({ field }) => (
                <Input placeholder="Enter class" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Birth Place</td>
          <td>
            <FormField
              control={form.control}
              name="birth_place"
              render={({ field }) => (
                <Input placeholder="Enter birth place" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">State</td>
          <td>
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <Input placeholder="Enter state" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Nationality</td>
          <td>
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <Input placeholder="Enter nationality" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Religion</td>
          <td>
            <FormField
              control={form.control}
              name="religion"
              render={({ field }) => (
                <Input placeholder="Enter religion" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Father's Name</td>
          <td>
            <FormField
              control={form.control}
              name="father_name"
              render={({ field }) => (
                <Input placeholder="Enter father's name" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Occupation</td>
          <td>
            <FormField
              control={form.control}
              name="occupation"
              render={({ field }) => (
                <Input placeholder="Enter occupation" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Parent's Mobile No</td>
          <td>
            <FormField
              control={form.control}
              name="parents_mobile"
              render={({ field }) => (
                <Input placeholder="Enter parent's mobile number" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Guardian Name</td>
          <td>
            <FormField
              control={form.control}
              name="guardian_name"
              render={({ field }) => (
                <Input placeholder="Enter guardian name" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Address</td>
          <td>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <Input placeholder="Enter address" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Guardian Profession</td>
          <td>
            <FormField
              control={form.control}
              name="guardian_profession"
              render={({ field }) => (
                <Input placeholder="Enter guardian profession" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Guardian Mobile Number</td>
          <td>
            <FormField
              control={form.control}
              name="guardian_mobile_number"
              render={({ field }) => (
                <Input placeholder="Enter guardian mobile number" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Relation</td>
          <td>
            <FormField
              control={form.control}
              name="relation"
              render={({ field }) => (
                <Input placeholder="Enter relation" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Annual Income</td>
          <td>
            <FormField
              control={form.control}
              name="annual_income"
              render={({ field }) => (
                <Input placeholder="Enter annual income" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Present Address</td>
          <td>
            <FormField
              control={form.control}
              name="present_address"
              render={({ field }) => (
                <Input placeholder="Enter present address" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Pin Code</td>
          <td>
            <FormField
              control={form.control}
              name="pin_code"
              render={({ field }) => (
                <Input placeholder="Enter pin code" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Permanent Address</td>
          <td>
            <FormField
              control={form.control}
              name="permanent_address"
              render={({ field }) => (
                <Input placeholder="Enter permanent address" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Mentor ID</td>
          <td>
            <FormField
              control={form.control}
              name="mentor_id"
              render={({ field }) => (
                <Input placeholder="Enter mentor ID" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Mentor Name</td>
          <td>
            <FormField
              control={form.control}
              name="mentor_name"
              render={({ field }) => (
                <Input placeholder="Enter mentor name" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Batch</td>
          <td>
            <FormField
              control={form.control}
              name="batch"
              render={({ field }) => (
                <Input placeholder="Enter batch" {...field} />
              )}
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div className="mt-4 ml-auto mr-10"> {/* ml-auto to push the button to the right */}
      <Button type="submit">Submit</Button>
    </div>
  </form>
</Form>
</>
  );
};

export default ProfileForm;
