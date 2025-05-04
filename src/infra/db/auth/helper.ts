
export const formarterManyUser =(users: any): any =>{

   const formarter = users.map((user: any) =>{

        const user_has_profiles_aux =  user.user_has_profiles.map((item: { profiles: { id: number; description: string } }) =>({id: item.profiles.id, description: item.profiles.description}))

        delete user.user_has_profiles
        delete user.password
        user.profiles = user_has_profiles_aux
        return{
            ...user
        }
    })

    return  formarter
}

export const formarterUniqueUser =(user: any): any =>{
 
         const user_has_profiles_aux =  user.user_has_profiles.map((item: { profiles: { id: number; description: string } }) =>({id: item.profiles.id, description: item.profiles.description}))
 
         delete user.user_has_profiles
         delete user.password
         user.profiles = user_has_profiles_aux
         return{
             ...user
         }

 }