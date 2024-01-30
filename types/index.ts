// ====== USER PARAMS
export type CreateUserParams = {
    clerkId: string
    firstName: string
    lastName: string
    username: string
    email: string
    photo: string
    dbID:string
    
  }
  
  export type UpdateUserParams = {
    firstName: string
    lastName: string
    username: string
    photo: string    
    
  }

  export type ProfileParams={
    username:string
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
  
  export type DeleteEventParams = {
    eventId: string
    path: string
  }
  
  export type GetAllEventsParams = {
    query: string
    category: string
    limit: number
    page: number
  }
  
  export type GetEventsByUserParams = {
    userId: string
    limit?: number
    page: number
  }
  
  export type GetRelatedEventsByCategoryParams = {
    categoryId: string
    eventId: string
    limit?: number
    page: number | string
  }
  
  export type Event = {
    _id: string
    title: string
    description: string
    price: string
    isFree: boolean
    imageUrl: string
    location: string
    startDateTime: Date
    endDateTime: Date
    url: string
    organizer: {
      _id: string
      firstName: string
      lastName: string
    }
    category: {
      _id: string
      name: string
    }
  }
  
  // ====== CATEGORY PARAMS
  export type CreateCategoryParams = {
    categoryName: string
  }
  
  // ====== ORDER PARAMS
  export type CheckoutOrderParams = {
    eventTitle: string
    eventId: string
    price: string
    isFree: boolean
    buyerId: string
  }
  
  export type CreateOrderParams = {
    stripeId: string
    eventId: string
    buyerId: string
    totalAmount: string
    createdAt: Date
  }
  
  export type GetOrdersByEventParams = {
    eventId: string
    searchString: string
  }
  
  export type GetOrdersByUserParams = {
    userId: string | null
    limit?: number
    page: string | number | null
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
  