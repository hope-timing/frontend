export class ProfileDto {
  constructor(
    private _avatar: string,
    private _firstName: string,
    private _lastName: string,
    private _middleName: string,
    private _phone: string,
    private _city: string,
    private _age: string,
    private _sex: string,
    private _email: string,
    private _id: string
  ) {}

  get avatar() {
    return this._avatar;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get middleName() {
    return this._middleName;
  }

  get phone() {
    return this._phone;
  }

  get city() {
    return this._city;
  }

  get age() {
    return this._age;
  }

  get sex() {
    return this._sex;
  }

  get email() {
    return this._email;
  }

  get id() {
    return this._id;
  }

  static of(obj?: any) {
    return new ProfileDto(
      obj?.avatar ?? "",
      obj?.firstName ?? "",
      obj?.lastName ?? "",
      obj?.middleName ?? "",
      obj?.phone ?? "",
      obj?.city ?? "",
      obj?.age ?? "",
      obj?.sex ?? "",
      obj?.email ?? "",
      obj?.id ?? ""
    );
  }

  static empty() {
    return new ProfileDto("", "", "", "", "", "", "", "", "", "");
  }
}
