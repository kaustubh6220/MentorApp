// ====== USER PARAMS
export type CreateUserParams = {
    clerkId: string
    firstName: string
    lastName: string
    username: string
    email: string
    photo: string
    // dbID:string
    
  }

  export type InitialParams = {
    dbUserId :string
    username: string
  }
  
  export type UpdateUserParams = {
    firstName: string
    lastName: string
    username: string
    photo: string    
    
  }

  export type ProfileParams={
    username:string
    uniqId:string
    dbUserId:string
    full_name : string    
    year_of_admission: String    
    class: string    
    // date_of_birth: Date    
    birth_place: string    
    state: string    
    nationality: string   
    religion: string    
    father_name: string    
    occupation: string    
    parents_mobile: string   
    guardian_name: string    
    address: string    
    guardian_profession: string    
    guardian_mobile_number: string    
    relation: string    
    annual_income: string    
    present_address: string    
    pin_code: String    
    permanent_address: string
    mentor_id:string   
    mentor_name: string    
    batch:string
  }

  export type FacultyProfileParams={
    username:string
    dbUserId:string
    uniqId:string
    full_name : string    
      
    state: string    
    nationality: string   
    religion: string    
       
    present_address: string    
    pin_code: String    
    permanent_address: string
    
  }

  export type updateProfileParams={
    dbUserId:string
    profile : {
      username:string
      
      full_name : string    
      year_of_admission: number    
      class: string    
      // date_of_birth: Date    
      birth_place: string    
      state: string    
      nationality: string   
      religion: string    
      father_name: string    
      occupation: string    
      parents_mobile: string   
      guardian_name: string    
      address: string    
      guardian_profession: string    
      guardian_mobile_number: string    
      relation: string    
      annual_income: string    
      present_address: string    
      pin_code: Number    
      permanent_address: string
      mentor_id:string   
      mentor_name: string    
      batch:string
    }
    path:string
  }

  export type UpdateFacultyProfileParams={
    dbUserId:string
    profile : {
      username:string
      
      full_name : string    
  
      state: string    
      nationality: string   
      religion: string    
        
      present_address: string    
      pin_code: Number    
      permanent_address: string
      
    }
    path:string
  }
  
  // ====== EVENT PARAMS
  export type CreateEventParams = {
    userId: string
    event: {
      title: string
      description: string
      location: string
      imageUrl: string
      startDateTime: Date
      endDateTime: Date
      categoryId: string
      price: string
      isFree: boolean
      url: string
    }
    path: string
  }
  
  export type UpdateEventParams = {
    userId: string
    event: {
      _id: string
      title: string
      imageUrl: string
      description: string
      location: string
      startDateTime: Date
      endDateTime: Date
      categoryId: string
      price: string
      isFree: boolean
      url: string
    }
    path: string
  }
  
 
  
  // ====== URL QUERY PARAMS
  export type UrlQueryParams = {
    params: string
    key: string
    value: string | null
  }
  
  export type RemoveUrlQueryParams = {
    params: string
    keysToRemove: string[]
  }
  
  export type SearchParamProps = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
  