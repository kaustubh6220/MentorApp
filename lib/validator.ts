
import { z } from "zod"

export const profileFormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    uniqId: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),

    full_name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    year_of_admission: z.string().min(2, {
      message: "Year must number.",
    }),
    class: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    birth_place: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    state: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    nationality: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    religion: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    father_name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    occupation: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    parents_mobile: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    guardian_name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),

    address: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    guardian_profession: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),

    guardian_mobile_number: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),

    relation: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),

    annual_income: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),

    present_address: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    pin_code: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    permanent_address: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    mentor_id: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    mentor_name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    batch: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),


  })


  export const facultyProfileFormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    uniqId: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),

    full_name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    
    state: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    nationality: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    religion: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    
    

    present_address: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    pin_code: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    permanent_address: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    


  })