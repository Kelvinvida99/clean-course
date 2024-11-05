(() => {
  // No aplicando el principio de responsabilidad única

  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCrendential() {
      return true;
    }
  }

  class UserSetting extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      public email: string,
      public role: string,
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
      this.workingDirectory = "";
      this.lastOpenFolder = "";
    }
  }

  const newPerson = new Person("kelvin", "M", new Date(2020 - 12 - 12));
  console.log(newPerson);

  const newUserSetting = new UserSetting(
    "folder",
    "folder",
    "kelvin@",
    "programer",
    "kelvin",
    "M",
    new Date("1999-09-2")
  )
})();

