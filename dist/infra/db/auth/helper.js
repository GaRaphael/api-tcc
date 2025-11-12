"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formarterManyUser = void 0;
const formarterManyUser = (users) => {
    const formarter = users.map((user) => {
        const user_has_profiles_aux = user.user_has_profiles.map((item) => ({ id: item.profiles.id, description: item.profiles.description }));
        delete user.user_has_profiles;
        delete user.password;
        user.profiles = user_has_profiles_aux;
        return {
            ...user
        };
    });
    return formarter;
};
exports.formarterManyUser = formarterManyUser;
//# sourceMappingURL=helper.js.map