var Role;
(function (Role) {
    Role[Role["staff"] = 0] = "staff";
    Role[Role["student"] = 1] = "student";
    Role[Role["manager"] = 2] = "manager";
    Role[Role["admin"] = 3] = "admin";
})(Role || (Role = {}));
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
    Gender[Gender["other"] = 2] = "other";
})(Gender || (Gender = {}));
var User = /** @class */ (function () {
    function User(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    User.prototype.fullName = function () {
        return this.name + ' ' + this.surname;
    };
    return User;
}());
var marioRossi = new User("Mario", "Rossi");
console.log(marioRossi.fullName());
