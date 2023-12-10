import { PropTypes } from "prop-types"

export default function Select({ name, options, optionValue, handleChange, ...rest }) {
    return (
        <select className="select select-sm select-bordered" name={name} onChange={handleChange} {...rest}>
            {options?.map((option) => (
                <option key={option.id} value={option[optionValue]}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}

Select.propTypes = {
    name: PropTypes.string,
    options: PropTypes.array,
    optionValue: PropTypes.string,
    handleChange: PropTypes.func,
    defaultOption: PropTypes.string,
}
