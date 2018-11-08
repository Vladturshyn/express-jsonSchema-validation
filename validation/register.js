const Ajv = require('ajv');
const ajv = new Ajv({allErrors: true});

module.exports = function validateLoginInput(data){
    console.log(data);
    const schema = {
            "required": ["email", "password"],
            "properties": {
                "email": {
                  "type": "string",
                  "format" : "email",
                  "minLength": 3,
                  "maxLength": 32
                },
                "password": {
                    "type": "string",
                    "minLength": 8,
                    "maxLength": 16,
                },
            }
    };
      const validate = ajv.compile(schema);
      const valid = validate(data);
      errors = {};
      if (!valid) {
            errors = ajv.errorsText(validate.errors);
            return { errors: errors, isValid: false };
      } else{
            return {errors: errors, isValid: true};
      }
};