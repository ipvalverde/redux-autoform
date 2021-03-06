/**
 * Array validator
 */
export default function (propertyMetadata, modelValue, model, validator) {
    if (!modelValue) return undefined;
    if (propertyMetadata.type != 'array') return undefined;
    if (!modelValue.length) return undefined;

    return modelValue.map(item => validator.validate(propertyMetadata.fields, item));
};