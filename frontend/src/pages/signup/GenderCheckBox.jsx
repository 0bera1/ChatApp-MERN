
const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className="flex space-x-10 ml-1 ">
            <div className="form-control">
                <label className={`gap-3 cursor-pointer label transition-all duration-300 ease-in-out
                     ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className="label-text text-gray-300 transition-colors duration-300 ease-in-out hover:text-lime-300">
                        Male
                    </span>
                    <input
                        type="checkbox"
                        className="checkbox checkbox-success border-gray-300 transition-colors duration-300 ease-in-out focus:ring-2 focus:ring-lime-300 hover:border-lime-500"
                        checked={selectedGender === "male"}
                        onChange={() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className={`gap-3 cursor-pointer label transition-all duration-300 ease-in-out
                    ${selectedGender === "female" ? "selected" : ""}`}>
                    <span className="label-text text-gray-300 transition-colors duration-300 ease-in-out hover:text-lime-300">
                        Female
                    </span>
                    <input
                        type="checkbox"
                        className="checkbox checkbox-success border-gray-300 transition-colors duration-300 ease-in-out focus:ring-2 focus:ring-lime-300 hover:border-lime-500"
                        checked={selectedGender === "female"}
                        onChange={() => onCheckboxChange("female")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className={`gap-3 cursor-pointer label transition-all duration-300 ease-in-out
                    ${selectedGender === "other" ? "selected" : ""}`}>
                    <span className="label-text text-gray-300 transition-colors duration-300 ease-in-out hover:text-lime-300">
                        Other
                    </span>
                    <input
                        type="checkbox"
                        className="checkbox checkbox-success  border-gray-100 transition-colors duration-300 ease-in-out focus:ring-2 focus:ring-lime-300 hover:border-lime-500 "
                        checked={selectedGender === "other"}
                        onChange={() => onCheckboxChange("other")}
                    />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox
