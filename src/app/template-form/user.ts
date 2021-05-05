export class User {

    constructor(
      public name: string,
      public email: string,
      public phoneNo: string,
      public password: string,
      public confirmPassword: string,
      public terms: boolean
    ) {  }
  
  }