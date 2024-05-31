"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose_update_if_current_1 = require("mongoose-update-if-current");
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true
    }
});
userSchema.plugin(mongoose_update_if_current_1.updateIfCurrentPlugin);
exports.UserModel = mongoose_1.default.model("User", userSchema);
